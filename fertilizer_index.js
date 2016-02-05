var Harvest = require('./harvest_model')

module.exports = function (req, res) {
  Harvest.aggregate('fertilizer', 'DISTINCT', {
    plain: false
  }).then(function (theCrop) {
    res.send(theCrop)
  })
}
