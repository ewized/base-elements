import { LitElement, html, css, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { styles } from '../../utils.js'
import style from './flex.scss'

/** Center items in the center of the box both vertical and horzonial */
@customElement('e-flex-center')
@styles(style)
export default class FlexCenter extends LitElement {
  render() {
    return html`
      <content class="center">
        <slot></slot>
      </content>
    `
  }
}
