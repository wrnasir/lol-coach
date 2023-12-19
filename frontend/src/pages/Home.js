import { useEffect, useState } from 'react'

// components
import GoalDetails from '../components/GoalDetails'
import GoalForm from '../components/GoalForm'

const Home = () => {
    const [goals, setGoals] = useState(null)
    useEffect(() => {
        const fetchGoals = async () => {
            const response = await fetch('/stats')
            const json = await response.json()

            if(response.ok){
                setGoals(json)
            }
        }

        fetchGoals()
    }, [])

    return (
        <div className="home">
            <div className='goals'>
               {goals && goals.map((goal) => (
                <GoalDetails key={goal._id} goal={goal}/>
               ))} 
            </div>
            <GoalForm />
        </div>
    )
}

export default Home