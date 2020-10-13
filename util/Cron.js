require('dotenv').config();
const cron = require('node-cron')
const LocationService = require('../model/services/LocationService')

class Cron {
  constructor() {
    this.jobs = [];
    console.log("🚀 Running all jobs");
    this.jLocation = cron.schedule("*/15 * * * * *", async () => {
      console.log("----------------------------------------------------------");
      if (!(await LocationService.init())) {
        console.log("--------------------- Destroy Job ------------------------");
        this.jLocation.stop();
      }
    });
  }

  load() { }

  start() {
    console.log("--------------------- Running Job ------------------------");
  }

  stop() {
    console.log("--------------------- Destroy Job ------------------------");
  }
}

module.exports = Cron;

