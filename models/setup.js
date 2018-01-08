const mongoose = require('mongoose');

let DB_URL;

if (process.env.MONGOLAB_URL) {
  DB_URL = process.env.MONGOLAB_URL;
} else {
  let env = process.env.NODE_ENV || 'development'
  DB_URL = `mongodb://localhost:5000/pub-quiz-${env}`;
}

mongoose.connect(DB_URL, function(error) {
  if (error) {
    console.error(error);
  }
});

module.exports.mongoose = mongoose
