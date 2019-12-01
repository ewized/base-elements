import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './button.scss'

@customElement('e-button')
@styles(style)
export default class Button extends LitElement {
  /** Generate the action text for the link */
  get actionText() {
    return this.attributes.getNamedItem('title')?.value || this.innerHTML
  }

  /** Get the link url */
  get link() {
    let link = this.attributes.getNamedItem('link')?.value
    if (link == null) {
      throw 'link= attr is required'
    }
    return link
  }

  render() {
    return html`
      <a href=${this.link} title=${this.actionText} aria-label=${this.actionText}>
        <slot></slot>
      </a>
    `
  }
}
