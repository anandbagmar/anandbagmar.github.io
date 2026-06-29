#!/usr/bin/env node
// Pre-builds the Lunr search index after Jekyll generates _site/search.json.
// Outputs _site/search-index.json — a serialised lunr.Index that the browser
// loads with lunr.Index.load(), skipping the expensive in-browser build step.
'use strict';

const lunr = require('lunr');
const fs   = require('fs');
const path = require('path');

const searchJson  = path.join(__dirname, '..', '_site', 'search.json');
const indexJson   = path.join(__dirname, '..', '_site', 'search-index.json');

if (!fs.existsSync(searchJson)) {
  console.error('ERROR: _site/search.json not found — run jekyll build first.');
  process.exit(1);
}

const docs = JSON.parse(fs.readFileSync(searchJson, 'utf8'));

const index = lunr(function () {
  this.ref('url');
  this.field('title',   { boost: 10 });
  this.field('tags',    { boost: 6 });
  this.field('excerpt', { boost: 1 });
  docs.forEach(doc => this.add(doc));
});

fs.writeFileSync(indexJson, JSON.stringify(index));
console.log(`Search index built: ${docs.length} docs → _site/search-index.json (${Math.round(fs.statSync(indexJson).size / 1024)} KB)`);
