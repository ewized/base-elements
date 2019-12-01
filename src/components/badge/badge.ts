import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './badge.scss'

@customElement('e-badge')
@styles(style)
export default class Badge extends LitElement {

  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `
  }
}
