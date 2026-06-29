(function () {
  var SEARCH_JSON = '/search.json';
  var SITE_URL    = 'https://essenceoftesting.com';
  var index, docs;

  var input    = document.getElementById('eot-search-input');
  var results  = document.getElementById('eot-search-results');
  var external = document.getElementById('eot-search-external');
  var glink    = document.getElementById('eot-google-link');

  // Load the pre-built Lunr index (generated at Jekyll-build time by
  // scripts/build-search-index.js — avoids blocking the main thread with
  // synchronous index construction which can take 30 s+ on slow CI runners).
  Promise.all([
    fetch(SEARCH_JSON).then(function (r) { return r.json(); }),
    fetch('/search-index.json').then(function (r) { return r.json(); })
  ])
    .then(function (results_arr) {
      docs  = results_arr[0];
      index = lunr.Index.load(results_arr[1]);
      window.__searchReady = true;
      var params = new URLSearchParams(window.location.search);
      var q = params.get('q');
      if (q) { input.value = q; runSearch(q); }
    })
    .catch(function () {
      results.innerHTML = '<p class="eot-search-hint">Search index could not be loaded.</p>';
    });

  input.addEventListener('input', function () {
    var q = input.value.trim();
    // Update URL without reloading
    var url = q ? '?q=' + encodeURIComponent(q) : window.location.pathname;
    history.replaceState(null, '', url);
    runSearch(q);
  });

  function runSearch(q) {
    if (!index) return;
    if (!q) {
      results.innerHTML = '<p class="eot-search-hint">Start typing to search across all posts and pages.</p>';
      external.style.display = 'none';
      return;
    }

    var hits;
    try {
      // Try exact query first, fall back to wildcard on each term
      hits = index.search(q);
      if (hits.length === 0) {
        var wildcard = q.trim().split(/\s+/).map(function (t) {
          return t.replace(/[*~^+\-]/g, '') + '*';
        }).join(' ');
        hits = index.search(wildcard);
      }
    } catch (e) { hits = []; }

    // Update Google link
    glink.href = 'https://www.google.com/search?q=' + encodeURIComponent(q + ' site:essenceoftesting.com');
    external.style.display = 'block';

    if (hits.length === 0) {
      results.innerHTML = '<p class="eot-search-empty">No results for <strong>' + esc(q) + '</strong>.</p>';
      return;
    }

    var html = hits.slice(0, 30).map(function (hit) {
      var doc = docs.find(function (d) { return d.url === hit.ref; });
      if (!doc) return '';
      var excerpt = highlight(doc.excerpt, q);
      var meta = [doc.date, doc.tags].filter(Boolean).join(' · ');
      return '<div class="eot-result-item">'
        + '<p class="eot-result-title"><a href="' + esc(doc.url) + '">' + esc(doc.title) + '</a></p>'
        + (meta ? '<p class="eot-result-meta">' + esc(meta) + '</p>' : '')
        + (excerpt ? '<p class="eot-result-excerpt">' + excerpt + '</p>' : '')
        + '</div>';
    }).join('');

    results.innerHTML = '<p class="eot-search-hint">' + hits.length + ' result' + (hits.length === 1 ? '' : 's') + ' for <strong>' + esc(q) + '</strong></p>' + html;
  }

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function highlight(text, q) {
    if (!text) return '';
    // Find best excerpt window around first match
    var terms = q.trim().split(/\s+/).filter(Boolean);
    var re = new RegExp('(' + terms.map(function(t){ return t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }).join('|') + ')', 'gi');
    var match = re.exec(text);
    var start = match ? Math.max(0, match.index - 80) : 0;
    var snippet = (start > 0 ? '…' : '') + esc(text.slice(start, start + 220)) + (text.length > start + 220 ? '…' : '');
    // Re-highlight in escaped snippet
    var reEsc = new RegExp('(' + terms.map(function(t){ return esc(t).replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }).join('|') + ')', 'gi');
    return snippet.replace(reEsc, '<mark>$1</mark>');
  }
})();
