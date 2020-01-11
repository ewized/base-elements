import { LitElement, html } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './highlight.scss'

@customElement('e-highlight')
@styles(style)
export default class Highlight extends LitElement {

  render() {
    return html`<slot></slot>`
  }
}
