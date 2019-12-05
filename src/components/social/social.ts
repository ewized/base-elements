import { LitElement, html, customElement } from 'lit-element'
import { styles, notNull } from '../../utils'
import style from './social.scss'
import '../tooltip'
import '../icon'

interface SocialIcon {
  icon: string
  clazz: string
}

interface SocialMap {
  [name: string]: SocialIcon
}

export const SOCIAL_NETWORKS: SocialMap = {
  facebook: { icon: 'facebook', clazz: 'facebook' },
  linkedin: { icon: 'linkedin', clazz: 'linkedin' },
  github: { icon: 'github', clazz: 'github' },
  youtube: { icon: 'youtube-play', clazz: 'youtube' },
  twitter: { icon: 'twitter', clazz: 'twitter' },
}

@customElement('e-social')
@styles(style)
export default class Social extends LitElement {

  /** Get the type of custom social network styles */
  get social(): SocialIcon {
    let network = this.getAttribute('network')
    if (network) {
      return SOCIAL_NETWORKS[network]
    }
    return {
      icon: notNull(this.getAttribute('icon'), '"network" attribute not found must use "icon" instead'),
      clazz: 'custom',
    }
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
    return customSize ? `--e-social-size: ${customSize}` : ''
  }

  /** Is the social icon rounded or square */
  get rounded() {
    return this.hasAttribute('round') ? 'round' : 'square'
  }

  /** Is the social icon outlined or filled */
  get outline() {
    return this.hasAttribute('outline') ? 'outline' : 'filled'
  }

  render() {
    let { icon, clazz } = this.social
    return html`
      <e-tooltip value="${this.tooltip}">
        <a class="${clazz} ${this.rounded} ${this.outline}" style="${this.size}" rel="nofollow" target="_blank" href="${this.link}" aria-label="${this.tooltip}">
          <e-icon>${icon}</e-icon>
        </a>
      </e-tooltip>
    `
  }
}
