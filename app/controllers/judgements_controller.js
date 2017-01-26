var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/judgements');

// var Court = require('../models/court');
var Judgement = require('../models/judgement');

// var judgement = new Judgement({
//   judgementText: 'Loreum Ipsum Judgement. Loreum Ipsum Judgement. Loreum Ipsum Judgement.',
//   court: '5889a6feb9a2231520ae6b7d'
// });
//
// judgement.save(function(err) {
//   if (err) throw err;
//   console.log('Judgement saved successfully!');
// })


// Judgement.find({ _id: '5889ec8632900c057400e100' }, function(err, judgement) {
//   if (err) throw err;
//   console.log(judgement[0].court);
// });


// This gives the value of court name by doing judgement.court.name
// Judgement.find({ _id: '5889ec8632900c057400e100' })
//          .populate('court')
//          .exec(function (err, judgement) {
//            if (err) throw err;
//            console.log(judgement);
//          })


// This creates a new judgement record with both court assosciation and judges assosciation
// var judgement = new Judgement({
//   judgementText: 'Loreum Ipsum Judgement. Loreum Ipsum Judgement. Loreum Ipsum Judgement.',
//   court: '5889a6feb9a2231520ae6b7d',
//   judges: ['5889f7364fc6091eacce682a', '5889f7364fc6091eacce682b']
// });
//
// judgement.save(function(err) {
//   if (err) throw err;
//   console.log('Judgement saved successfully!');
// })

// This gives the value of court name by doing judgement.court.name
Judgement.find({ _id: '5889f7f3a026832790a5a3d4' })
        //  .populate({
        //     path: 'court',
        //     model: 'Court',
        //     path: 'judges',
        //     model: 'Judge'
        //  })
         .populate('court')
         .populate('judges')
         .exec(function (err, judgement) {
           if (err) throw err;
           console.log(judgement[0].judges);
         })


// Both the below stuff works for populating
// .populate({
//    path: 'court',
//    model: 'Court',
//    path: 'judges',
//    model: 'Judge'
// })

// .populate('court')
// .populate('judges[]')
