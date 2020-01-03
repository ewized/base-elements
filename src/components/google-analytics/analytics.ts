import { LitElement, html, customElement } from 'lit-element'
import { script, notNull } from '../../utils'

declare global {
  interface Window {
    ga: any
  }
}

@customElement('e-ga')
export default class GoogleAnalytics extends LitElement {

  /** Get the property tracking id */
  get property() {
    return notNull(this.getAttribute('property'), 'must define property tag with property value')
  }

  /** Load the debug version of the analytics script */
  get debug() {
    return this.hasAttribute('debug')
  }

  /** Get the google analytics object that is loaded from the script */
  get ga() {
    window.ga = window.ga || function() {
      (window.ga.q = window.ga.q || []).push(arguments)
    }
    window.ga.l =+ new Date()
    return window.ga
  }

  connectedCallback() {
    super.connectedCallback()
    this.ga('create', this.property, 'auto')
    this.ga('send', 'pageview')
  }

  render() {
    return html`${script(`https://www.google-analytics.com/${this.debug ? 'analytics_debug' : 'analytics'}.js`, true)}`
  }
}
