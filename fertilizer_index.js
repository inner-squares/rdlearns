var Harvest = require('./harvest_model')

module.exports = function (req, res) // requst & response
{
  Harvest.aggregate('fertilizer', 'DISTINCT', {
    plain: false
  }).then(function (theCrop) {
    console.log(theCrop)
    res.send(theCrop)
  })
}
