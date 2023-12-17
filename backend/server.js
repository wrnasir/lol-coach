require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes/goals');


// Start express app
const app = express();

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/stats', routes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
        console.log('listening on port ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
