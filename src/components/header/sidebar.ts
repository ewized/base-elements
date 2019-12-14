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
      <a href=${link} aria-label=${name}>
        <e-icon>${icon}</e-icon>
        <span>${name}</span>
      </a>
    `
  }

  render() {
    return html`
      <a href="#!" rel="nofollow" class="sidebar-opener" aria-label="Sidebar">
        <e-icon slot="button">bars</e-icon>
      </a>
      <aside class=${this.position}>
        <div class="container">
          <header>
            <slot name="header"></slot>
          </header>
          <div class="scroll">
            <nav>${(<Array<MenuItem>>[ ...this.children ]).filter(e => e instanceof MenuItem).map(this.nav)}</nav>
            <footer>
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </aside>
    `
  }
}
