module.exports = function (opts) {
  var delim = opts && opts.delimeter || ' '

  function log (str) {
    log.records.push(str)
  }

  log.records = []

  log.toString = function () {
    return this.records.join(delim)
  }

  log.fn = function (what) {
    return function () {
      log(what)
    }
  }

  if (should) {
    Object.defineProperty(log, 'should', {
      get: function () {
        return this.toString().should
      }
    })
  }

  return log
}