const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const url = `mongodb+srv://damigreen:4444@cluster0-9junr.mongodb.net/avios?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true })
  .then(result => { console.log(`connected to ${url}`); })
  .catch(error => { console.log(`error connecting to the db ${error.message}`); });


const productSchema = mongoose.Schema({
  size: { type: Number },
  color: { type: String },
  quantity: { type: Number },
  images: { type: [String] },
  price: { type: Number }
})
productSchema.plugin(uniqueValidator);

const Product = mongoose.model('Product', productSchema);

const product = new Product({
  size: 50,
  color: 'Red',
  quantity: 27,
  images: ['image5', 'image6'],
  price: 29000
});

product.save().then(result => {
  console.log('product saved');
  mongoose.connection.close();
})
  .catch(err => {
    console.log(err);
  });