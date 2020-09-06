import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './icon.scss'

// @ts-ignore
const BASE_ELEMENTS_FONT_PREFIX = unsafeCSS(window.BASE_ELEMENTS_FONT_PREFIX || '')

@customElement('e-icon')
@styles(style)
export default class Icon extends LitElement {
  // Fix bug with icons https://github.com/mdn/interactive-examples/issues/887#issuecomment-528205273
  connectedCallback() {
    super.connectedCallback()
    const fontFaceSheet = css`
      @font-face {
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 900;
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.eot');
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.eot?#iefix') format('embedded-opentype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.woff2') format('woff2'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.woff') format('woff'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.ttf') format('truetype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-solid-900.svg#fontawesome') format('svg');
      }
      @font-face {
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 400;
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.eot');
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.eot?#iefix') format('embedded-opentype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.woff2') format('woff2'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.woff') format('woff'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.ttf') format('truetype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-regular-400.svg#fontawesome') format('svg');
      }
      @font-face {
        font-family: 'Font Awesome 5 Brands';
        font-style: normal;
        font-weight: 400;
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.eot');
        src: url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.eot?#iefix') format('embedded-opentype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.woff2') format('woff2'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.woff') format('woff'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.ttf') format('truetype'),
        url('${BASE_ELEMENTS_FONT_PREFIX}/fa-brands-400.svg#fontawesome') format('svg');
      }
    `.styleSheet
    // @ts-ignore
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, fontFaceSheet]
  }

  /** Get the custom type of the icon */
  get type() {
    return this.getAttribute('type') || 'fas'
  }

  render() {
    return html`<i class="${this.type} fa-${this.textContent} ${this.hasAttribute('spin') ? 'fa-spin' : 'fa-static'}"></i>`
  }
}
