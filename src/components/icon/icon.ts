import { LitElement, html, css, unsafeCSS, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './icon.scss'

// @ts-ignore
const BASE_ELEMENTS_FONT_PREFIX = unsafeCSS(window.BASE_ELEMENTS_FONT_PREFIX || 'assets')

@customElement('e-icon')
@styles(style)
export default class Icon extends LitElement {
  // Fix bug with icons https://github.com/mdn/interactive-examples/issues/887#issuecomment-528205273
  connectedCallback() {
    super.connectedCallback()
    let fontFaceSheet = css`
      @font-face {
        font-family: "FontAwesome";
        font-weight: normal;
        font-style: normal;
        src: url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.eot");
        src: url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.eot?#iefix") format("embedded-opentype"),
             url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.woff2") format("woff2"),
             url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.woff") format("woff"),
             url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.ttf") format("truetype"),
             url("${BASE_ELEMENTS_FONT_PREFIX}/fontawesome-webfont.svg#fontawesomeregular") format("svg");
      }
    `.styleSheet
    // @ts-ignore
    document.adoptedStyleSheets = [ ...document.adoptedStyleSheets, fontFaceSheet ]
  }

  render() {
    return html`<i class="fa fa-${this.innerHTML} ${this.attributes.getNamedItem('spin') ? 'fa-spin' : 'fa-static'}"></i>`
  }
}
