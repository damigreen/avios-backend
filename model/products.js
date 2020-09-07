const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema({
  size: { type: String },
  color: { type: String },
  quantity: { type: Number },
  images: { type: [String] },
  price: { type: Number }
})
productSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Products', productSchema);
