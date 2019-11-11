import { LitElement, html, customElement, property } from 'lit-element'
import { styles } from '../utils'
import style from '../../scss/image.scss'

const TRANS_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=';

@customElement('e-image')
@styles(style)
export class Image extends LitElement {

  @property() image = TRANS_PNG

  firstUpdated() {
    // todo, generate the lazy loading of the image value
    this.image = this.attributes.source.value
  }

  render() {
    return html`<img src=${this.image} style=${this.attributes?.style?.value}></img>`
  }
}
