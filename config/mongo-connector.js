const fastifyPlugin = require('fastify-plugin')
require('dotenv').config()
const mongoose = require('mongoose')

// Connect to DB
async function mongoConnector(fastify, options) {
  try {
    console.log('process.env.MEEYCHAT_MONGO_URL', process.env.MEEYCHAT_MONGO_URL);
    const connect = await mongoose.connect(process.env.MEEYCHAT_MONGO_URL, { useNewUrlParser: true })
    console.log("Database is connected!!!")
    fastify.decorate('mongo', connect)
  } catch (err) {
    console.log("Database connect failed!!!")
    console.log(err)
  }
}
module.exports = fastifyPlugin(mongoConnector)