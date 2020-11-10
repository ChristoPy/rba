const defineWichToValidate = (type) => {
  const baseDefinitions = {
    GET: 'params',
    POST: 'body',
    PUT: 'body',
  }

  if (!baseDefinitions[type]) {
    throw new Error(`Sorry, a request of type '${type}' is not supported yet.`)
  }

  return baseDefinitions[type]
}

const resource = (definition, fastify) => {
  const { method, path, receives } = definition
  const lowerCasedMethod = method.toLowerCase()

  const schema = {
    [defineWichToValidate(method)]: receives,
  }

  fastify[lowerCasedMethod](`/${path}`, {
    schema,
    handler(request, response) {
      console.log(request.params);
      response.send(200)
    }
  })
}

module.exports = resource
