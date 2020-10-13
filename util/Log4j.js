'use strict'

/**
 * LogUtils
*/
const log4js = require('log4js');
const _path = require('path');
const os = require('os');
require('dotenv').config();
/**
 * Config Log4js
 */
log4js.addLayout('json', function (config) {
  return function (logEvent) {
    const time = new Date(new Date(logEvent.startTime).toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0];
    const data = JSON.parse(logEvent.data[0]);
    return JSON.stringify(Object.assign({ 'time': time, 'level': logEvent.level.levelStr }, data)) + config.separator;
  }
});
log4js.configure({
  appenders: {
    everything: {
      type: 'dateFile',
      filename: _path.resolve(__dirname + '/../../logs/log-'),
      pattern: 'yyyy-MM-dd-hh.log',
      alwaysIncludePattern: true,
      layout: { type: 'json', separator: '' },
      maxLogSize: 104857600,
      backups: 100
    },
  },
  categories: {
    error: { appenders: ['everything'], level: 'error' },
    response: { appenders: ['everything'], level: 'info' },
    default: { appenders: ['everything'], level: 'info' }
  },
  replaceConsole: true,
  pm2: true,
  disableClustering: false
});

/**
* Save error to file log
* @param {*} data Object 
*/
const errLogger = (data) => {
  const { func, message } = data;
  if (func && message) {
    const msg = Object.assign({
      server: os.hostname(),
      requestId: global.__requestId,
      method: global.__method || 'job',
      url: global.__url || 'job'
    }, data);
    log4js.getLogger('error').error(JSON.stringify(msg));
  }
}

/**
* Save response to file log
* @param {*} data  Object 
*/
const msgLogger = (data) => {
  const { func, message } = data;
  if (func && message) {
    const msg = Object.assign({
      server: os.hostname(),
      requestId: global.__requestId,
      method: global.__method || 'job',
      url: global.__url || 'job'
    }, data);
    log4js.getLogger('response').info(JSON.stringify(msg))
  }
}


module.exports = {
  errLogger,
  msgLogger,
}