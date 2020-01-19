const environment = process.env.ENVIRONMENT || 'qa'
const config = require(`./test_data/${environment}/config`)

module.exports = {
  config,
  environment
}
