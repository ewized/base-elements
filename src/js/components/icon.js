import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/icon.scss'

@customElement('e-icon')
@styles(style)
export class Icon extends LitElement {

  render() {
    return html`<i class="fa fa-${this.innerHTML}"></i>`
  }
}
