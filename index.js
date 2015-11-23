var express = require('express')
var app = express()

app.get('/', function (req, res) {
  // res.send('Hello World!')
  Harvest.findOne({ where: {crop: 0} }).then(function (theCrop) {
    // project will be the first entry of the Projects table with the title 'aProject' || null
    res.send(theCrop)
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

var Sequelize = require('sequelize')
// var sequelize = new Sequelize('farmland', 'joe_user', '1234');
var sequelize = new Sequelize('farmland', 'root', 'raspberry', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

})

var Harvest = sequelize.define('harvest', {
  crop: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  examined: {
    type: Sequelize.BIGINT
  },
  seed: {
    type: Sequelize.BIGINT
  },
  fertilizer: {
    type: Sequelize.STRING
  },
  solution: {
    type: Sequelize.STRING
  },
  harvest: {
    type: Sequelize.STRING
  },
  solver: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: false, // Model tableName will not be the same as the model name

  // define the table's name
  tableName: 'upper_forty',
  timestamps: false
})

// search for attributes
Harvest.findOne({ where: {crop: 0} }).then(function (theCrop) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  console.log(theCrop)
})

/* User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});*/
