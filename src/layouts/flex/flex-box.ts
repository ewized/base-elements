import { LitElement, html, css, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../../utils.js'
import style from './flex.scss'

/** The wrapper that defines a flex box area, and renders the children */
@customElement('e-flex-box')
@styles(style)
export default class FlexBox extends LitElement {
  /** Add flex properties on the content element wrapper */
  updated() {
    let content = this.shadowRoot.children[0]
    content.style['flex-direction'] = this.attributes?.column ? 'column' : 'row'
    content.style['flex-wrap'] = this.attributes?.wrap ? 'wrap' : 'nowrap'
  }

  render() {
    return html`
      <content>
        ${Array.from(this.children)}
      </content>
    `
  }
}
