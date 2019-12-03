import { LitElement, html, customElement } from 'lit-element'
import { styles } from '../../utils'
import style from './sidebar.scss'

@customElement('e-sidebar')
@styles(style)
export default class Sidebar extends LitElement {

  /** Get the positon that the sidebar should come out of left or right */
  get position() {
    return this.attributes.getNamedItem('right') ? 'right' : 'left'
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
            <slot></slot>
          </nav>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </aside>
    `
  }
}
