
// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

// Root Index

app.get('/', (req, res) => {
    res.send('helloooo')
})

// Controllers & Routes
app.use('/books', require('./controllers/books'))




// Listen for Connections
app.listen(process.env.PORT)
