const express = require('express');
const Goal = require('../models/goalModel')
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
router.post('/', async (req, res) => {
    const {goalType, goalDate} = req.body
    try{
        const goal = await Goal.create({goalType, goalDate})
        res.status(200).json(goal)
    } catch(error){
        res.status(400).json({error: error.message})
    }
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