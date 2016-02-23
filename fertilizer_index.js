var Harvest = require('./harvest_model')

module.exports = function (req, res) // requst & response
{
  Harvest.aggregate('fertilizer', 'DISTINCT', {
    plain: false
  }).then(function (theCrop) {
    console.log(theCrop)
    console.log("Im here")
    res.send("foo")
    //res.send(JSON.stringify(theCrop))
  })
}
