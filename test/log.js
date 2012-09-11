var should = require('should')
var Log = require('..')

describe('calls-log', function () {
  it('test logging', function () {
    var log = Log()
    log('hello')
    log('world')
    log.records.should.eql(['hello', 'world'])
    log.should.equal('hello world')
  })

  it('test log.fn()', function () {
    var log = Log()
    log.fn('hi')()
    log.should.equal('hi')
  })
})