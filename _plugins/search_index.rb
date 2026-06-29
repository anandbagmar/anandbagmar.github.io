# Regenerates the Lunr search index (_site/search-index.json) after every
# Jekyll build, so `bundle exec jekyll serve` — and each incremental rebuild it
# does — always serves a fresh index. Without this, only `./server.sh` or the
# CI `npm run build:search` step produced the index, so plain `jekyll serve`
# left search broken locally (search-index.json missing → search never loaded).
#
# The actual index build lives in scripts/build-search-index.js (single source
# of truth, shared with CI). This hook just shells out to it after the site is
# written. It degrades gracefully when Node or the lunr dependency is absent
# (e.g. the CI "Build Jekyll site" step runs before `npm ci`), warning instead
# of failing the build — CI's explicit build:search step covers that case.
Jekyll::Hooks.register :site, :post_write do |site|
  script = File.join(site.source, 'scripts', 'build-search-index.js')
  lunr   = File.join(site.source, 'node_modules', 'lunr')

  next unless File.exist?(script)

  unless Dir.exist?(lunr)
    Jekyll.logger.warn 'SearchIndex:',
                       'node_modules/lunr not found; skipping (run `npm install`).'
    next
  end

  unless system('node', script)
    Jekyll.logger.warn 'SearchIndex:',
                       'build-search-index.js failed; search index not regenerated.'
  end
end
