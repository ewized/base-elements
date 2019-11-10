import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils.js'
import style from '../../scss/paper.scss'

@customElement('e-paper')
@styles(style)
export class Paper extends LitElement {

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}
