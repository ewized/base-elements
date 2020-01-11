import { LitElement, html } from 'lit-element'
import { styles, customElement } from '../../utils'
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
