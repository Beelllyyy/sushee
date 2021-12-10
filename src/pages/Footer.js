import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/Context'

export default function Footer() {

    const {currentUser} = useAuth()
    const loginBtn = currentUser ?
        <Link to='/profile' className='footer-btn'>Profile</Link> :
        <Link to='/login' className="footer-btn">Login</Link>

    return(
        <div className="Footer">
            <Link to='/listone' className="footer-btn">Listone</Link>
            {loginBtn}
        </div>
    )
}