var express = require('express')
var app = express()
express.static.mime.default_type = 'text/html'
app.use(express.static('public'))

var harvest_finder = require('./harvest_finder')
app.get('/harvest', harvest_finder)

var fertilizer_index = require('./fertilizer_index')
app.get('/fertilizers', fertilizer_index)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s !!', host, port)
})
