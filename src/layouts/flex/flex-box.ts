import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './flex.scss'

/** The wrapper that defines a flex box area, and renders the children */
@customElement('e-flex-box')
@styles(style)
export default class FlexBox extends LitElement {
  /** Add flex properties on the content element wrapper */
  updated() {
    let content = <HTMLElement|null> this.shadowRoot?.children[0]
    if (content) {
      content.style.flexDirection = this.hasAttribute('column') ? 'column' : 'row'
      content.style.flexWrap = this.hasAttribute('wrap') ? 'wrap' : 'nowrap'
    }
  }

  render() {
    return html`
      <content>
        ${Array.from(this.children)}
      </content>
    `
  }
}
