const productRouter = require('express').Router()
const Product = require('../model/products')

productRouter.get('/', async (req, res) => {
  try {
    // Get all the products from the DB
    const products = await Product.find({})
    res.json(products.map(product => product))
  } catch (exception) {
    console.log(exception)
  }
})

productRouter.post('/', async (req, res) => {
  // Create a new product
  const body = req.body;

  try {
    const product = await new Product({
      size: 67,
      color: "Brown",
      quantity: 12,
      images: ["image6", "image7"],
      price: 20000
    })
  
    const newProduct = await product.save()
    console.log(newProduct)
    res.json(newProduct.toJSON())

  } catch(exception) {
    console.log(exception)
  }
})

productRouter.put('/:id', async (req, res) => {
  const body = req.body;

  try {
    const productObj = {
      size: body.size,
      color: body.color,
      quantity: body.quantity,
      images: body.images,
      price: body.price
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, productObj, { new: true })
    res.json(updatedProduct.toJSON())

  } catch(exception) {
    console.log(exception)
  }
})

productRouter.delete('/:id', async (req, res) => {
  const productID = req.params.id
  try {
    await Product.findByIdAndRemove(productID)

    res.status(204).end()
  } catch (exception) {
    console.log(exception)
  }
})

module.exports = productRouter;