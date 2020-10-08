const get = prop => obj => obj[prop];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const debounce = (fn, delay) => {
  return args => {
    clearTimeout(fn.id)
    fn.id = setTimeout(() => {
      fn.call(this, args)
    }, delay)
  }
}

const throttle = (fn, delay) => {
  return args => {
    if (fn.id) return
    fn.id = setTimeout(() => {
      fn.call(this, args)
      clearTimeout(fn.id)
      fn.id = null
    }, delay)
  }
}

module.exports = { get, delay, debounce, throttle }