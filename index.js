const App = require('fastify');
const PORT = process.env.PORT || 3333;
const mongoConnector = require("./config/mongo-connector")
const routes = require("./routes")
const app = App({ bodyLimit: 1048576 * 2, logger: true })

app.get("/", async () => { return { message: "Initializing" } })

routes.forEach((route, index) => { app.route(route) })

const start = async () => {
  try {
    await app.register(mongoConnector)
    // await app.register(routes, { prefix: 'api' })
    await app.listen(PORT)
    app.log.info(`App running on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start();