const express = require('express');

const router = express.Router()

// GET all goals
router.get('/', (req, res) => {
    res.json({messg: 'GET all goals'})
})

// GET a goal
router.get('/:id', (req, res) => {
    res.json({messg: 'GET a single goal'})
})

// POST a new goal
router.post('/', (req, res) => {
    res.json({messg: 'POST a new goal'})
})

// UPDATE a goal
router.patch('/:id', (req, res) => {
    res.json({messg: 'UPDATE a new goal'})
})

// DELETE a goal
router.delete('/:id', (req, res) => {
    res.json({messg: 'DELETE a goal'})
})

module.exports = router