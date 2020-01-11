import { LitElement, html } from 'lit-element'
import { styles, notNull, customElement } from '../../utils'
import style from './link.scss'

@customElement('e-link')
@styles(style)
export default class Link extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.getAttribute('label') || this.textContent
  }

  /** Get the target of the link */
  get target() {
    return this.getAttribute('target') || '_self'
  }

  get link() {
    return notNull(this.getAttribute('link'), 'link attribute is required')
  }

  render() {
    return html`
      <a target=${this.target} href=${this.link} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
