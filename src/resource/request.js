const fetch = require('node-fetch')

const createRequestOptions = (method, methodAsKey, currentRequest) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    [methodAsKey]: JSON.stringify(currentRequest[methodAsKey]),
  }

  return options
}

const requestAnotherResource = (resides, options, baseResponse) => fetch(resides, options)
  .then((serviceResponse) => {
    if (serviceResponse.ok) {
      return serviceResponse.json()
    }

    baseResponse.code(serviceResponse.status)
  },
)

module.exports = {
  createRequestOptions,
  requestAnotherResource,
}
