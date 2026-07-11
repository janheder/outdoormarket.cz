const fs = require('fs');
const postcss = require('postcss');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const sortMediaQueries = require('postcss-sort-media-queries');
const cssDeclarationSorter = require('css-declaration-sorter');
const combineMediaQuery = require('postcss-combine-media-query');
const discardDuplicates = require('postcss-discard-duplicates');

const css = fs.readFileSync('../redesign.css', 'utf8');

postcss([
    combineMediaQuery(),
    sortMediaQueries({ sort: 'mobile-first' }),
    discardDuplicates(),
    combineSelectors({ removeDuplicatedProperties: true }),
    cssDeclarationSorter({ order: 'smacss' })
])
.process(css, { from: '../redesign.css', to: 'out.css' })
.then(result => {
    fs.writeFileSync('out.css', result.css);
    console.log('Processed CSS written to out.css');
})
.catch(error => {
    console.error(error);
});
