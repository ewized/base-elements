import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './header.scss'
import MenuItem from './menu-item'
import './sidebar'
import '../icon'
import '../../elements/link'

@customElement('e-header')
@styles(style)
export default class Header extends LitElement {

  /** Check if the header is fixed in position or fluid with the page */
  get fixed() {
      return this.hasAttribute('fixed') ? 'fixed' : 'fluid'
  }

  nav({ link, icon, name }: MenuItem) {
    return html`
      <e-link link="${link}">
        <e-icon>${icon}</e-icon>
        ${name}
      </e-link>
    `
  }

  render() {
    return html`
      <header class=${this.fixed}>
        <div class="container">
          <e-sidebar>
            ${[ ...this.children ]}
          </e-sidebar>
          <div>
            ${(<Array<MenuItem>>[ ...this.children ]).filter(e => !e.isSidebarOnly).map(this.nav)}
          </div>
        </div>
      </header>
      <div class="placeholder"></div>
    `
  }
}
