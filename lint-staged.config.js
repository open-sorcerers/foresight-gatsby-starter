const { reject, includes } = require('ramda')
module.exports = {
  '**/*.js': x => {
    const excluded = reject(includes('modernizr.js'), x)
    return `nps "lint.eslint ${excluded.join(' ')}"`
  }
}
