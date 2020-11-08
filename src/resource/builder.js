const resource = require(".")

const resourceBuilder = (resources, fastify) => {
  Object.keys(resources).forEach((resourceName) => {
    const resourceDefinition = resources[resourceName]

    resource(resourceDefinition, fastify)
  })
}

module.exports = resourceBuilder
