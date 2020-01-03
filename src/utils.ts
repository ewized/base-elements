import { css, unsafeCSS, CSSResult } from 'lit-element'
import { directive, NodePart } from 'lit-html'

/** Takes the import object for scss files and inject it into the custom element */
export const _styles = (style: Array<Array<string>>) => css`${unsafeCSS(style[0][1])}`

/** Creates a decorator for the class */
export function styles(...styles: Array<any>) {
  // this is the equalivant of doing in the class
  // static styles = _styles(style)
  return (descriptor: any) => {
    Object.defineProperty(descriptor, 'styles', { value: styles.map(style => style instanceof CSSResult ? style : _styles(style)) })
    // return {
    //   ...descriptor,
    //   elements: [ ...descriptor.elements, {
    //     kind: 'field',
    //     placement: 'static',
    //     key: 'styles',
    //     descriptor: {},
    //     initializer: () => styles.map(style => style instanceof CSSResult ? style : _styles(style)),
    //   }],
    // }
  }
}

/** Check if the value is null if so throw error with the message */
export const truthy = (value: any, message: string = 'The value was false') => {
  if (!value) {
    throw new Error(message)
  }
}

/** Check if the value is null if so throw error with the message */
export const notNull = (value: any, message: string = 'The value was null') => {
  if (value) {
    return value
  }
  throw new Error(message)
}

/** Used to replate a sleep function in an async call used for debugging */
export const sleep = async (time: number) => new Promise(resolve => window.setTimeout(resolve, time))

/** Create a script directive with the src value */
export const script = directive((value: string, async: boolean = false) => (part: any) => {
  truthy(part instanceof NodePart, 'unsafeHTML can only be used in text bindings')
  const script = document.createElement('script')
  script.src = value
  script.async = async
  part.setValue(script)
})
