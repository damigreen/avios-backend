const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRouter = require('./controllers/productRouter')
var cors = require('cors')
const bodyParser = require('body-parser')


const url = `mongodb+srv://damigreen:4444@cluster0-9junr.mongodb.net/avios?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true })
  .then(result => { console.log(`connected to ${url}`); })
  .catch(error => { console.log(`error connecting to the db ${error.message}`); });

app.use(cors());
app.use(bodyParser.json());


app.use('/api/products', productRouter)

module.exports = app
