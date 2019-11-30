'use strict'

// Import the script from the url
function importScript(url) {
  const request = new XMLHttpRequest()
  request.onload = () => eval(request.responseText)
  request.open('GET', url, true)
  request.send()
}

// Change XMLHttpRequest to include origin header
// https://github.com/Rob--W/cors-anywhere/#documentation
(function() {
  const cors_api_host = 'cors-anywhere.herokuapp.com'
  const cors_api_url = 'https://' + cors_api_host + '/'
  const slice = [].slice
  const origin = window.location.protocol + '//' + window.location.host
  const open = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function() {
      const args = slice.call(arguments)
      let targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1])
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1]
      }
      return open.apply(this, args)
  }
})()

// Set the font aweseome url prefix to a cdn
window.BASE_ELEMENTS_FONT_PREFIX = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts'
// Import the bundle that is generated from GitHub Releases
importScript('https://github.com/ewized/base-elements/releases/latest/download/base_elements.bundle.js')
