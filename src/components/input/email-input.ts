import { customElement } from 'lit-element'
import AbstractInput from './abstract-input'

@customElement('e-email-input')
export default class TextInput extends AbstractInput {
  type = 'email'
}
