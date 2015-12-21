var express = require('express')
var app = express()
express.static.mime.default_type = 'text/html'
app.use(express.static('public'))


var harvest_finder = require('./harvest_finder')

// app.get('/', function (req, res) {
//   // res.send('Hello World!')
//   Harvest.findOne({ where: {crop: 0} }).then(function (theCrop) {
//     // project will be the first entry of the Projects table with the title 'aProject' || null
//     res.send(theCrop)
//   })
// })

app.get('/harvest', harvest_finder)

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})



// search for attributes
/*
Harvest.findOne({ where: {crop: 0} }).then(function (theCrop) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  console.log(theCrop)
})
*/

/* User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});*/
