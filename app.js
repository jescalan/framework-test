const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')
const pageId = require('spike-page-id')
const jsx = require('babel-plugin-transform-react-jsx')

module.exports = {
  entry: {
    'js/skatejs': ['./assets/js/skatejs.js'],
    'js/preact': ['./assets/js/preact.js']
  },
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', '_cache/**', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } }
  }),
  postcss: cssStandards(),
  babel: {
    presets: [[jsStandards, { modules: false }]],
    plugins: [[jsx, { pragma: 'h' }]]
  }
}