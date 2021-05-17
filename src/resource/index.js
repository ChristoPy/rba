const { createRequestOptions, requestAnotherResource } = require('./request')

const defineWichToValidate = (type) => {
  const baseDefinitions = {
    GET: 'params',
    POST: 'body',
    PUT: 'body',
    PATCH: 'body',
    DELETE: 'params'
  }

  if (!baseDefinitions[type]) {
    throw new Error(`Sorry, a request of type '${type}' is not supported yet.`)
  }

  return baseDefinitions[type]
}

const resource = (definition, fastify) => {
  const { method, path, receives, resides } = definition
  const lowerCasedMethod = method.toLowerCase()

  const methodAsAKey = defineWichToValidate(method)

  const schema = {
    [methodAsAKey]: receives,
  }

  fastify[lowerCasedMethod](`/${path}`, {
    schema,
    handler(request, response) {
      const options = createRequestOptions(method, methodAsAKey, request)

      requestAnotherResource(resides, options, response).then(
        (serviceResponseAsJSON) => response.send(serviceResponseAsJSON),
      )
    }
  })
}

module.exports = resource
