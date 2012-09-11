# test-log

Tiny logger for tests like

``` javascript
it('.waterfall()', function () {
  var log = Log()

  async.waterfall([
    function (cb) {
      log('first')
      cb(null, 'one', 'two')
    },
    function (arg1, arg2, cb) {
      arg1.should.equal('one')
      arg2.should.equal('two')
      log('second')
      cb(null, 'three;')
    },
    function (arg1, cb) {
      arg1.should.equal('three')
      log('third')
      cb()
    }
  ], log.fn('done'))

  log.should.equal('first second third done')
})
```
For rational see https://gist.github.com/3656269

## Installtion

Via npm `npm install test-log`

## License

MIT