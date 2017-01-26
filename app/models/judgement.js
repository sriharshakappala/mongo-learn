var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Court = require('./court');
var Judge = require('./judge');

var judgementSchema = new Schema({
  judgementText: String,
  court: { type: Schema.ObjectId, ref: 'Court'},
  judges: [{ type: Schema.ObjectId, ref: 'Judge'}],
  created_at: Date,
  updated_at: Date
});

var Judgement = mongoose.model('Judgement', judgementSchema);

module.exports = Judgement;
