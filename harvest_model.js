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

export default sequelize.define('harvest', {
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
    type: Sequelize.STRING,
    get: function () {
      var sol_string = this.getDataValue('solution')
      var sol_part = sol_string.split(':')
      return { 'discard': sol_part[0], 'repeats': sol_part[1] }
    }
  },
  // the big stuff is here
  harvest: {
    type: Sequelize.STRING,
    get: function () {
      var harv_string = this.getDataValue('harvest')
      return JSON.parse(harv_string)
    }
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
