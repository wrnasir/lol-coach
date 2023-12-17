const express = require('express')
const {
    getGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

const router = express.Router()

// GET all goals
router.get('/', getGoals)

// GET a goal
router.get('/:id', getGoal)

// POST a new goal
router.post('/', createGoal)

// UPDATE a goal
router.patch('/:id', updateGoal)

// DELETE a goal
router.delete('/:id', deleteGoal)

module.exports = router