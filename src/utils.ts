import { css, unsafeCSS, CSSResult } from 'lit-element'

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
export const notNull = (value: any, message: string = 'The value was null') => {
  if (value) {
    return value
  }
  throw new Error(message)
}
