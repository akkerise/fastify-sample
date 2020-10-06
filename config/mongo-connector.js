const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

// Connect to DB
async function mongoConnector(fastify, options) {
  try {
    const url = "mongodb://localhost:27017/temp"
    const db = await mongoose.connect(url, { useNewUrlParser: true })
    console.log("Database is connected")
    fastify.decorate('mongo', db)
  } catch (err) {
    console.log(err)
  }
}
module.exports = fastifyPlugin(mongoConnector)