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
      <a href=${link} aria-label=${name}>
        <e-icon>${icon}</e-icon>
        <span>${name}</span>
      </a>
    `
  }

  render() {
    return html`
      <header class=${this.fixed}>
        <div class="container">
          <e-sidebar>
            ${[ ...this.children ]}
          </e-sidebar>
          <div class="logo">
            <slot name="logo">
              <h1>Base Elements</h1>
            </slot>
          </div>
          <nav>
            ${(<Array<MenuItem>>[ ...this.children ]).filter(e => !e.isSidebarOnly).map(this.nav)}
          </nav>
        </div>
      </header>
      <div class="placeholder"></div>
    `
  }
}
