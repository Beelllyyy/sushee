import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../contexts/Context'

export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value)
            navigate('/', {replace: true})
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }

    return(
        <div className='Login'>
            <div className='form-title'>Log In</div>
            {error && <div className='form-error'>{error}</div>}
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className='form-label'>Email</label>
                    <input  className='form-text' type='email' ref={emailRef} required />
                </div>
                <div className="form-row">
                    <label className='form-label'>Password</label>
                    <input  className='form-text' type='password' ref={passRef} required />
                </div>
                <div className="form-row">
                    <button className='form-submit' type='submit' disabled={loading}>Log In</button>
                </div>
            </form>
            <div className='form-extra'>
                Need an account? <Link className='form-extra-link' to='/signup'>Sign Up</Link>
            </div>
        </div>
    )
}