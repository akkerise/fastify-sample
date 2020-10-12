'use strict';

const redis = require('promise-redis')();

const client = redis.createClient({
  host: `${process.env.REDIS_HOST}`,
  port: +process.env.REDIS_PORT,
  auth_pass: `${process.env.REDIS_PASSWORD}`
});

client.on("error", function (err) {
  console.error(err);
});

function set(key, data, exp) {
  return client.set(key.toString(), data.toString()).then(() => {
    return client.expire(key.toString(), exp || 1800);
  });
}

function get(key) {
  return client.get(key.toString());
}

function del(key) {
  return client.del(key.toString());
}

module.exports = {
  get, set, del
};
