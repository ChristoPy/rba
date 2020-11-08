const resourceBuilder = require('./resource/builder')
const fastify = require('fastify')

const start = (resources, port, serverOptions = {}) => {
  const server = fastify(serverOptions)

  resourceBuilder(resources, server)
  server.listen(port, '0.0.0.0', (error) => {
    if (error) {
      fastify.log.error(error)
      process.exit(1)
    }
  })
}

module.exports = start
