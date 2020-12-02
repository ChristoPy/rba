const rba = require('../src')
const resources = require('./resources.json')

rba(resources, 3000, {
  logger: true,
})
