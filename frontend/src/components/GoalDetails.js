const GoalDetails = ({ goal }) => {
    return (
        <div className="goal-details">
            <h4>{goal.goalType}</h4>
            <p><strong>Goal Type: </strong>{goal.goalType}</p>
            <p><strong>Goal Date: </strong>{goal.goalDate}</p>
            <p>{goal.createdAt}</p>
        </div>
    )
}

export default GoalDetails