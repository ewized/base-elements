import { LitElement, html, customElement, property } from 'lit-element'
import { styles } from '../../utils.js'
import style from './image.scss'

const TRANS_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';

@customElement('e-image')
@styles(style)
export default class Image extends LitElement {

  @property() image = TRANS_PNG

  firstUpdated() {
    // todo generate the lazy loading of the image value
    this.image = this.attributes.source.value
  }

  /** Never forget the alt tag, use file name if it's not specificed */
  get altTag() {
    // todo remove query parameters from alt and # selector
    let alt = this.attributes?.alt?.value
    let lastSeperator = this.image.lastIndexOf('/')
    if (!alt && lastSeperator > 0) {
      if (lastSeperator == this.image.length - 1) {
        // remove http prefix if any
        alt = this.image.substr(0, lastSeperator).replace(/http(s)?:\/\//, '')
      } else {
        // remove suffix if any
        alt = this.image.substr(lastSeperator + 1).replace(/\.([A-Za-z])+/, '')
      }
    }
    return alt
  }

  render() {
    return html`<img alt=${this.altTag} src=${this.image}></img>`
  }
}
