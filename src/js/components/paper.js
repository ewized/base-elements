import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/paper.scss'

@customElement('e-paper')
@styles(style)
export class Paper extends LitElement {

  render() {
    return html`
      <div style=${this.attributes?.style?.value}>
        <slot></slot>
      </div>
    `
  }
}
