const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
