const fastifyPlugin = require('fastify-plugin')
require('dotenv').config()
const mongoose = require('mongoose')

// Connect to DB
async function mongoConnector(fastify, options) {
  try {
    const connect = await mongoose.connect(process.env.MEEYCHAT_MONGO_URL, { useNewUrlParser: true })
    console.log(`Database is connected!!!`, process.env.MEEYCHAT_MONGO_URL)
    fastify.decorate('mongo', connect)
  } catch (err) {
    console.log("Database connect failed!!!", JSON.stringify(err))
  }
}
module.exports = fastifyPlugin(mongoConnector)