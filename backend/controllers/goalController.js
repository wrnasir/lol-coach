const Goal = require('../models/goalModel')
const mongoose = require('mongoose')

/**
 * Gets all goals.
 * 
 * @param {*} req the request body
 * @param {*} res the response body
 */
const getGoals = async (req, res) => {
    const goals = await Goal.find({}).sort({createdAt: -1})

    res.status(200).json(goals)
}

/**
 * Gets a single goal.
 * 
 * @param {*} req the request body
 * @param {*} res the response body
 */
const getGoal = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such goal'})
    }

    const goal = await Goal.findById(id)

    if(!goal){
        return res.status(404).json({error:'No such goal'})
    }

    res.status(200).json(goal)
}

/**
 * Creates a new goal and exports it to the database.
 * 
 * @param {*} req the request body
 * @param {*} res the response body
 */
const createGoal = async (req, res) => {
    const {goalType, goalDate} = req.body

    // add doc to db
    try{
        const goal = await Goal.create({goalType, goalDate})
        res.status(200).json(goal)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

/**
 * Updates a goal.
 * 
 * @param {*} req the request body
 * @param {*} res the response body
 */
const updateGoal = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such goal'})
    }

    const goal = await Goal.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!goal){
        return res.status(404).json({error:'No such goal'})
    }

    res.status(200).json(goal)
}

/**
 * Deletes a goal.
 * 
 * @param {*} req the request body
 * @param {*} res the response body
 */
const deleteGoal = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such goal'})
    }

    const goal = await Goal.findOneAndDelete({_id: id})

    if(!goal){
        return res.status(404).json({error:'No such goal'})
    }

    res.status(200).json(goal)
}

module.exports = {
    getGoals,
    getGoal,
    createGoal,
    updateGoal,
    deleteGoal
}