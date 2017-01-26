var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/judgements');

var Court = require('../models/court');

var madras = new Court({
  name: 'Madras High Court'
});

madras.courtify(function(err, name) {
  if (err) throw err;
  console.log('Your name is ' + name);
})

madras.save(function(err) {
  if (err) throw err;
  console.log('Court saved successfully!');
})
