const mongoose = require('mongoose');

const profanitySchema = new mongoose.Schema({
  bannedWords: [{
    type: String,
  }],
})

const Profanity = mongoose.model('Profanity', profanitySchema);
module.exports = Profanity;