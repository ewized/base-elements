import { customElement } from 'lit-element'
import AbstractInput from './abstract-input'

@customElement('e-password-input')
export default class TextInput extends AbstractInput {
  type = 'password'
}
