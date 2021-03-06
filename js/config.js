const getApi = () => {
  if (typeof location === 'undefined' || !location.origin.includes(':')) {
    return 'http://localhost:3000'
  }
  return location.origin.slice(0, location.origin.lastIndexOf(':') + 1) + 3000
}

const config = {
  backen: getApi(),
  ws: getApi().replace('http', 'ws'),
  github: 'https://api.github.com'
}

window._config = config

if (typeof module !== 'undefined') {
  module.exports = config
}
