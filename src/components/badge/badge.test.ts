// @ts-ignore
window.customElements = {}
window.customElements.define = () => {}

import { render, html } from 'lit-html'
import './badge'

test('renders', () => {
  const element = document.createElement('div')
  render(html `<e-badge></e-badge>`, element)
})
