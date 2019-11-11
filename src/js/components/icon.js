import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/icon.scss'

@customElement('e-icon')
@styles(style)
export class Icon extends LitElement {
  // Fix bug with icons https://github.com/mdn/interactive-examples/issues/887#issuecomment-528205273
  connectedCallback() {
    super.connectedCallback()
    let fontFaceSheet = new CSSStyleSheet()
    fontFaceSheet.replaceSync(`
      @font-face {
        font-family: "FontAwesome";
        font-weight: normal;
        font-style : normal;
        src : url("/assets/fontawesome-webfont.eot");
        src : url("/assets/fontawesome-webfont.eot?#iefix") format("embedded-opentype"),
             url("/assets/fontawesome-webfont.woff2") format("woff2"),
             url("/assets/fontawesome-webfont.woff") format("woff"),
             url("/assets/fontawesome-webfont.ttf") format("truetype"),
             url("/assets/fontawesome-webfont.svg#fontawesomeregular") format("svg");
      }
    `)
    document.adoptedStyleSheets = [ ...document.adoptedStyleSheets, fontFaceSheet ]
  }

  render() {
    return html`<i class="fa fa-${this.innerHTML}"></i>`
  }
}
