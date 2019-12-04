import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './sidebar.scss'
import MenuItem from './menu-item'
import '../icon'
import '../../elements/link'

@customElement('e-sidebar')
@styles(style)
export default class Sidebar extends LitElement {

  /** Get the positon that the sidebar should come out of left or right */
  get position() {
    return this.hasAttribute('right') ? 'right' : 'left'
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
      <a href="#!" rel="nofollow" class="sidebar-opener">
        <e-icon slot="button">bars</e-icon>
      </a>
      <aside class="${this.position}">
        <div class="container">
          <header>
            <slot name="header"></slot>
          </header>
          <nav>
            ${(<Array<MenuItem>>[ ...this.children ]).map(this.nav)}
          </nav>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </aside>
    `
  }
}
