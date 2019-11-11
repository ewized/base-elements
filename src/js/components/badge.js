import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/badge.scss'

@customElement('e-badge')
@styles(style)
export class Badge extends LitElement {

  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `
  }
}
