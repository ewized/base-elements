import { customElement } from 'lit-element'
import AbstractInput from './abstract-input'

@customElement('e-text-input')
export default class TextInput extends AbstractInput {
  type = 'text'
}
