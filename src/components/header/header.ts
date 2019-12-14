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

  /** Header title */
  get header() {
    return html`${this.getAttribute('header') ?? 'Base Elements'}`
  }

  /** Get the sidebar logo slotted item or header attribute */
  get sidebarHeader() {
    let logo = [ ...this.children ].filter(e => e.getAttribute('slot') === 'logo').map(e => e.cloneNode(true))
    return logo.length > 0 ? logo : this.header
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
            <span slot="header">${this.sidebarHeader}</span>
            ${[ ...this.children ].filter(e => e instanceof MenuItem)}
          </e-sidebar>
          <div class="logo">
            <slot name="logo">
              <h1>${this.header}</h1>
            </slot>
          </div>
          <nav>
            ${(<Array<MenuItem>>[ ...this.children ]).filter(e => e instanceof MenuItem).filter(e => !e.isSidebarOnly).map(this.nav)}
          </nav>
        </div>
      </header>
      <div class="placeholder"></div>
    `
  }
}
