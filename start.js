const App = require('fastify');
const cron = require('node-cron')
const PORT = process.env.PORT || 3333;
const mongoConnector = require("./plugin/mongo-connector")
const routes = require("./routes")
const app = App({ bodyLimit: 1048576 * 2, logger: true })


/**
 * [hooks]
 * @param  {[type]} 'preValidation' [Pre validation]
 * @param  {[type]} 'onClose' [After close]
 */
app.addHook('preValidation', async (req, rep) => { })
app.addHook('onClose', (instance, done) => { })

app.use(require('cors')())

app.get("/", async () => { return { message: "Initializing" } })

routes.forEach((route, index) => { app.route(route) })

const start = async () => {
  try {
    await app.register(mongoConnector)
    await app.listen(PORT, `0.0.0.0`)
    app.log.info(`🚀 app running on ${app.server.address().port}`)
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err)}`)
    app.log.error(err)
    process.exit(1)
  }
}

// const UserService = require("./model/services/UserService")
// const rootJob = cron.schedule("*/2 * * * * *", async () => {
//   console.log("----------------------------------------------------------");
//   if (!(await UserService.jRename())) {
//     console.log("--------------------- Destroy Job ------------------------");
//     rootJob.stop();
//   }
// });  

start();
