import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils.js'
import style from './button.scss'

@customElement('e-button')
@styles(style)
export default class Button extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.attributes?.title?.value || this.innerHTML
  }

  render() {
    return html`
      <a href=${this.attributes.link.value} title=${this.actionText} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
