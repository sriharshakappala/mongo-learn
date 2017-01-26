var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/judgements');

var Judge = require('../models/judge');

var judge1 = new Judge({
  name: 'Judge Bay Emmar'
});

var judge2 = new Judge({
  name: 'Judge Robin Scherbatsky'
});

judge1.save(function(err) {
  if (err) throw err;
  console.log('Judge saved successfully!');
})

judge2.save(function(err) {
  if (err) throw err;
  console.log('Judge saved successfully!');
})
