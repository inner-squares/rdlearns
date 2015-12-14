import Harvest from 'harvest_model'

export default function (req, res) {
  Harvest.findOne({
    where: {
      seed: req.query.seed,
      fertilizer: req.query.fertilizer
    }
  }).then(function (theCrop) {
    res.send(theCrop)
  })
}
