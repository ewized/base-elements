import { LitElement, html, property, query } from 'lit-element'
import { styles, notNull } from '../../utils'
import style from './input.scss'

@styles(style)
export default abstract class AbstractInput extends LitElement {
  // Identify the element as a form-associated custom element
  static formAssociated = true
  type: string | undefined
  @query('input') $input!: HTMLInputElement
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

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

  /** Defaults to normal input validity */
  validate(input: HTMLInputElement): boolean {
    return input.checkValidity()
  }

  /** Check the validation of the inputs before submitting */
  onSubmit = (event: any) => {
    if (!this.validate(this.$input)) {
      this.$input.reportValidity()
      event.preventDefault()
    }
  }

  /** Append the form data */
  onFormData = ({ formData }: any) => {
    formData.append(this.santizeLabel, this._value)
  }

  onChange = ({ target }: any) => {
    this._value = target.value
  }

  formAssociatedCallback(form: HTMLFormElement) {
    // @ts-ignore
    form.addEventListener('formdata', this.onFormData)
    form.addEventListener('submit', this.onSubmit)
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
    `
  }
}
