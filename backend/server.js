require('dotenv').config()

const express = require('express');
const routes = require('./routes/stats')

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

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})
