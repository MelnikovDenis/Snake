const mongoose = require('mongoose');
const snakeResult = new mongoose.Schema({
      nick: {type: String, requared: true},
      points: {type: Number, requared: true}
});
module.exports = mongoose.model('snakeResult', snakeResult);
return mongoose.model('snakeResult', snakeResult);