import React, { useRef, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/Context'

export default function Signup() {
    const userRef = useRef() //TODO will use later to add User info in firebase db, pairing user's ID
    const emailRef = useRef()
    const passRef = useRef()
    const passConfRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate('/', {replace: true})
        }
    }, [currentUser])

    async function handleSubmit(e) {
        e.preventDefault()

        // Form validation
        if (passRef.current.value !== passConfRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            navigate('/', {replace: true})
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return(
        <div className='Signup'>
            <div className="form-title">Sign Up</div>
            {error && <div className='form-error'>{error}</div>}
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className='form-label'>Username</label>
                    <input className='form-text' type='text' ref={userRef} required />
                </div>
                <div className="form-row">
                    <label className='form-label'>Email</label>
                    <input className='form-text' type='email' ref={emailRef} required />
                </div>
                <div className="form-row">
                    <label className='form-label'>Password</label>
                    <input className='form-text' type='password' ref={passRef} required />
                </div>
                <div className="form-row">
                    <label className='form-label'>Confirm password</label>
                    <input className='form-text' type='password' ref={passConfRef} required />
                </div>
                <div className="form-row">
                    <button className='form-submit' type='submit' disabled={loading}>Sign Up</button>
                </div>
            </form>
            <div className='form-extra'>
                Already have an account? <Link className='form-extra-link' to='/login'>Log in</Link>
            </div>
        </div>
    )
}