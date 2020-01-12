import { html, customElement, property, query } from 'lit-element'
import { notNull } from '../../utils'
import AbstractInput from './abstract-input'

@customElement('e-password-input')
export default class TextInput extends AbstractInput {
  type = 'password'
  @property() _type = notNull(this.type, 'type must be given in')

  async onTogglePasswordVisiablity(event: any) {
    this._type = this._type === 'password' ? 'text' : 'password'
    this.$input.focus()
    // run later since focus needs to do stuff
    await new Promise(reslove => {
      window.setTimeout(() => {
        this.$input.setSelectionRange(this._value.length, this._value.length)
        reslove()
      })
    })
  }

  get passwordVisiablityText() {
    return this._type === 'password' ? 'show' : 'hide'
  }

  render() {
    return html`
      <input
          id=${this.santizeLabel}
          class='password'
          name=${this.santizeLabel}
          type=${this._type}
          placeholder=${this.label}
          ?disabled=${this.hasAttribute('disabled')}
          ?required=${this.hasAttribute('required')}
          .value=${this._value}
          @change=${this.onChange} />
      <label for=${this.santizeLabel}>${this.label}</label>
      <a
          class='password-visiablity'
          role='button'
          @click=${this.onTogglePasswordVisiablity}>
        ${this.passwordVisiablityText}
      </a>
    `
  }
}
