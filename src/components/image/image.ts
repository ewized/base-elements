import { LitElement, html, property } from 'lit-element'
import { styles, notNull, customElement } from '../../utils'
import style from './image.scss'

const TRANS_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII='

interface ElementCallback {
  element: HTMLElement,
  callback: () => void,
  top: number,
}

// inplace sorted list
const sortedList: Array<ElementCallback> = []

// process all the images that are in the view for the current animation frame
const loadImagesInView = async () => new Promise(resolve => {
  // have the callbacks only be called on a request frame
  window.requestAnimationFrame(() => {
    // Iterate from start of list list skipping < 0 and stoping the loop when outside of view port
    for (let i = 0, height ; i < sortedList.length && window.innerHeight >= (height = sortedList[i].top) ; i++) {
      let imageData = sortedList[i]
      if (height < 0) {
        continue
      }
      try {
        // run the imageData callback
        imageData.callback()
      } finally {
        // remove from sortedList after we call the callback
        sortedList.splice(i--, 1)
      }
    }
    // we are done with requestAnimationFrame
    resolve()
  })
})

// register the scroll event listener
window.addEventListener('scroll', async () => await loadImagesInView())

@customElement('e-image')
@styles(style)
export default class Image extends LitElement {
  @property() image = TRANS_PNG
  @property() loaded = false

  connectedCallback() {
    super.connectedCallback()
    const callback = {
      element: this,
      callback: () => {
        this.image = this.source
        this.loaded = true
      },
      get top(): number {
        let top = this.element.getBoundingClientRect().top
        return top === 0 ? this.element?.parentElement?.getBoundingClientRect()?.top || 0 : top
      },
    }
    // fancy sorting algorithm to speed this things up
    if (sortedList.length == 0 || (sortedList.length > 0 && sortedList[sortedList.length - 1].top <= callback.top)) {
      sortedList.push(callback)
    } else {
      // insert the callback in place relative to the other elements using binary search
      const getInsertIndex = () => {
        let top = callback.top
        // use recursive binary search hear since you should not have many images on a website anyways
        const binarySearch = (i: number, j: number): number => {
          if (i + 1 >= j) {
            return i
          }
          let mid = (i + (j - i) / 2) >> 0
          return top > sortedList[mid].top ? binarySearch(mid, j) : binarySearch(i, mid)
        }
        return binarySearch(0, sortedList.length)
      }
      sortedList.splice(getInsertIndex(), 0, callback)
    }
    // check for loading
    loadImagesInView()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    // remove callback from list if not all ready loaded
    if (!this.loaded) {
      for (let i = 0 ; i < sortedList.length ; i++) {
        if (this.isSameNode(sortedList[i].element)) {
          sortedList.splice(i, 1)
        }
      }
    }
  }

  /** Get the source image to be used for rending the image */
  get source() {
    return notNull(this.getAttribute('source'), 'source attribute must exist')
  }

  /** Get the height and width of the image predicted size */
  get heightWidth() {
    let size = this.getAttribute('size') ?? '100%,100%'
    let [ height, width ] = size.split(',')
    return `height: ${height}; width: ${width || height}`
  }

  /** Never forget the alt tag, use file name if it's not specificed */
  get altTag() {
    // todo remove query parameters from alt and # selector
    let alt = this.getAttribute('alt')
    let lastSeperator = this.image.lastIndexOf('/')
    if (!alt && lastSeperator > 0) {
      if (lastSeperator == this.image.length - 1) {
        // remove http prefix if any
        alt = this.image.substr(0, lastSeperator).replace(/http(s)?:\/\//, '')
      } else {
        // remove suffix if any
        alt = this.image.substr(lastSeperator + 1).replace(/\.([A-Za-z])+/, '')
      }
    }
    return alt
  }

  render() {
    return html`<img alt=${this.altTag} src=${this.image} style=${this.heightWidth}></img>`
  }
}
