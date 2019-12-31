import { LitElement, html, property } from 'lit-element'
import { styles, notNull } from '../../utils'
import style from './input.scss'

@styles(style)
export default abstract class AbstractInput extends LitElement {
  // Identify the element as a form-associated custom element
  static formAssociated = true
  type: string | undefined
  @property() _value: string = this.getAttribute('value') ?? ''

  /** Is this a required field for a form */
  get required() {
    return this.hasAttribute('required')
  }

  get label() {
    return this.getAttribute('label') ?? 'no label'
  }

  get santizeLabel() {
    return this.label.toLowerCase().replace(' ', '-')
  }

  get caption() {
    return ''
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

  onFormData({ formData }: any) {
    formData.append(this.santizeLabel, this._value)
  }

  onChange({ target }: any) {
    this._value = target.value
  }

  formAssociatedCallback(form: HTMLFormElement) {
    // @ts-ignore
    form.addEventListener('formdata', this.onFormData.bind(this))
  }

  formResetCallback() {
    this._value = this.getAttribute('value') ?? ''
  }

  render() {
    return html`
      <input
          id=${this.santizeLabel}
          name=${this.santizeLabel}
          type=${notNull(this.type, 'type must be given in')}
          placeholder=${this.label}
          ?disabled=${this.hasAttribute('disabled')}
          ?required=${this.hasAttribute('required')}
          .value=${this._value}
          @change=${this.onChange} />
      <label for=${this.santizeLabel}>${this.label}</label>
      <span>${this.caption}</span>
    `
  }
}
