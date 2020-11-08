const resourceBuilder = require('./resource/builder')
const resources = require('./resources.json')
const fastify = require('fastify')({
  logger: true,
})

resourceBuilder(resources, fastify)

fastify.listen(3000, '0.0.0.0', (error) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
})
