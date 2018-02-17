var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://admin:password@ds239368.mlab.com:39368/astro')
//
var db = mongoose.connection;

db.on('error', function() {
  // console.log('mongoose connection error');
});

db.once('open', function() {
  // console.log('mongoose connected successfully');
});

var astroSchema = mongoose.Schema({
  id: {type:Number, unique:true},
  name: String,
  zodiac: String
});
//
var Astro = mongoose.model('Astro', astroSchema);

exports.save = (astros) => {
  console.log(astros);
  return Astro.create(astros)
}
//
// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };
//
// module.exports.selectAll = selectAll;
