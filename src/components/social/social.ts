import { LitElement, html } from 'lit-element'
import { styles, notNull, customElement } from '../../utils'
import style from './social.scss'
import '../tooltip'
import '../icon'

/** Use diffrent icons for some social networks */
export const SOCIAL_ICONS = {
  youtube: 'youtube-play',
}

@customElement('e-social')
@styles(style)
export default class Social extends LitElement {

  /** Get the type of custom social network styles */
  get social(): string {
    return this.getAttribute('network') || 'custom'
  }

  /** Get the type of custom social network styles */
  get icon(): string {
    // @ts-ignore
    return this.getAttribute('icon') || SOCIAL_ICONS[this.social] || this.social
  }

  /** Get the custom tooltip for the social icon */
  get tooltip() {
    return this.getAttribute('tooltip')
  }

  /** Ge the link the social icon should point to */
  get link() {
    return notNull(this.getAttribute('link'), 'link attribute is required')
  }

  /** If there is a custom size set it to that using css variables */
  get size() {
    let customSize = this.getAttribute('size')
    return customSize ? `--e-social-size: ${customSize}${customSize.match(/[a-z]+$/) ? '' : 'px'};` : ''
  }

  /** Get the custom color of the icon */
  get color() {
    let customColor = this.getAttribute('color')
    return customColor ? `--e-social-color: ${customColor};` : ''
  }

  /** Is the social icon rounded or square */
  get rounded() {
    return this.hasAttribute('round') ? 'round' : 'square'
  }

  /** Is the social icon outlined or filled */
  get outline() {
    return this.hasAttribute('outline') ? 'outline' : 'filled'
  }

  /** Is the social icon outlined or filled */
  get hovered() {
    return this.hasAttribute('hovered') ? 'hovered' : 'normal'
  }

  render() {
    return html`
      <e-tooltip value=${this.tooltip} class="${this.hovered} ${this.social} ${this.rounded} ${this.outline}" style="${this.size} ${this.color}">
        <a rel="nofollow noreferrer" target="_blank" href=${this.link} aria-label=${this.tooltip}>
          <e-icon>${this.icon}</e-icon>
        </a>
      </e-tooltip>
    `
  }
}
