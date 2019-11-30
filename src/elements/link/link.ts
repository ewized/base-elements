import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils.js'
import style from './link.scss'

@customElement('e-link')
@styles(style)
export default class Link extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.attributes?.label?.value || this.innerHTML
  }

  /** Get the target of the link */
  get target() {
    return this.attributes?.target?.value || '_self'
  }

  render() {
    return html`
      <a target=${this.target} href=${this.attributes.link.value} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
