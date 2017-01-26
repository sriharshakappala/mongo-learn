var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courtSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

// courtSchema.methods.courtify = function() {
//   this.name = this.name + 'Court';
//   return this.name;
// };

var Court = mongoose.model('Court', courtSchema);

module.exports = Court;
