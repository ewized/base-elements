import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './header.scss'

import './sidebar'

@customElement('e-header')
@styles(style)
export default class Header extends LitElement {

  /** Check if the header is fixed in position or fluid with the page */
  get fixed() {
      return this.attributes.getNamedItem('fixed') ? 'fixed' : 'fluid'
  }

  render() {
    return html`
      <header class="${this.fixed}">
        <div class="container">
          <e-sidebar></e-sidebar>
          &nbsp;
          <e-sidebar right></e-sidebar>
        </div>
      </header>
      <div class="placeholder"></div>
    `
  }
}
