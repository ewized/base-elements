import { LitElement, html } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './badge.scss'

@customElement('e-badge')
@styles(style)
export default class Badge extends LitElement {

  render() {
    return html`<slot></slot>`
  }
}
