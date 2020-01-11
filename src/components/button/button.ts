import { LitElement, html } from 'lit-element'
import { styles, notNull, customElement } from '../../utils'
import style from './button.scss'

@customElement('e-button')
@styles(style)
export default class Button extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.getAttribute('title') || this.textContent
  }

  /** Get the link url */
  get link() {
    return notNull(this.getAttribute('link'), 'link attribute is required')
  }

  render() {
    return html`
      <a href=${this.link} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
