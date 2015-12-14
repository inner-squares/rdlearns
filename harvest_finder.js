var harvest_model = require('./harvest_model')

module.exports = function (req, res) {
  Harvest.findOne({
    where: {
      seed: req.query.seed,
      fertilizer: req.query.fertilizer
    }
  }).then(function (theCrop) {
    res.send(theCrop)
  })
}
