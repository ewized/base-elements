import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/link.scss'

@customElement('e-link')
@styles(style)
export class Link extends LitElement {

  render() {
    return html`
      <a href=${this.attributes.link.value}>
        <slot></slot>
      </a>
    `
  }
}
