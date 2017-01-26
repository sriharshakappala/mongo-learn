var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var judgeSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

var Judge = mongoose.model('Judge', judgeSchema);

module.exports = Judge;
