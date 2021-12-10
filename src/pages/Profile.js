import React, {useState} from 'react'
import {useAuth} from '../contexts/Context'
import {useNavigate} from 'react-router-dom'

export default function Profile() {
    const {currentUser, logout} = useAuth()
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function handleLogOut() {
        setError('')
        try{

            await logout()
            navigate('/login', {replace: true})
        } catch {
            setError('Failed to logout')
        }
    }

    return(
        <div>
            <div>{currentUser && currentUser.email}</div>
            <div>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    )
}