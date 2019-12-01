import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './link.scss'

@customElement('e-link')
@styles(style)
export default class Link extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.attributes.getNamedItem('label')?.value || this.innerHTML
  }

  /** Get the target of the link */
  get target() {
    return this.attributes.getNamedItem('target')?.value || '_self'
  }

  get link() {
    return this.attributes.getNamedItem('link')?.value
  }

  render() {
    return html`
      <a target=${this.target} href=${this.link} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
