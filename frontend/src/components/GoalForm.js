import { useState } from 'react'

const GoalForm = () =>{
    const [goalType, setGoalType] = useState('')
    const [goalDate, setGoalDate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const goal = {goalType, goalDate}

        const response = await fetch('/stats', {
            method: 'POST',
            body: JSON.stringify(goal),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setGoalType('')
            setGoalDate('')
            setError(null)
            console.log('New Goal Added')
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Goal</h3>

            <label>Goal Title</label>
            <input
                type="text"
                onChange={(e) => setGoalType(e.target.value)}
                value={goalType}
            />

            <label>Target Date</label>
            <input
                type="number"
                onChange={(e) => setGoalDate(e.target.value)}
                value={goalDate}
            />

            <button>Add New Goal</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default GoalForm