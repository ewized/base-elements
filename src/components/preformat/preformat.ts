import { LitElement, html } from 'lit-element'
import { styles, customElement } from '../../utils'
import style from './preformat.scss'

@customElement('e-preformat')
@styles(style)
export default class Preformat extends LitElement {

  render() {
    return html`<slot></slot>`
  }
}
