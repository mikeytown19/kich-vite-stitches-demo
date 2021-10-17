
import {  keyframes,
  globalCss
} from './stitches.config'
import postcss from 'postcss';
import postcssJs from 'postcss-js';


const kichCss = document.querySelector('style[lang="kich"]')
const kichStyles = postcssJs.objectify(postcss.parse(kichCss.innerHTML));



const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
 ...kichStyles

});


globalStyles()