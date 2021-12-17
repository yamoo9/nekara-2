const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isFeatured: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Product', productSchema);
