const mongoose =  require('mongoose');

const quote = mongoose.Schema({
    author: { type: String },
    quote: { type: String }
});

const Quote = mongoose.model('Quote', quote);

module.exports = Quote;