const CleanCSS = require('clean-css');


module.exports = function (source, options={}) {
  const { styles } = new CleanCSS(options).minify(source)
  return `import {css} from 'lit-element'; export default css\`${styles}\`;`
};
