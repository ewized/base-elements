import { LitElement, customElement } from 'lit-element'

/**
  This element is only for data, as the header and sidebar will take this
  and render their own stuff. That is based on its attrigutes.
  */
@customElement('e-menu-item')
export default class MenuItem extends LitElement {

  get name() {
    return this.getAttribute('name')
  }

  get link() {
    return this.getAttribute('link')
  }

  get icon() {
    return this.getAttribute('icon')
  }

  get isSidebarOnly() {
    return this.hasAttribute('sidebarOnly')
  }
}
