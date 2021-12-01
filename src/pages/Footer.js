import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <div className="container__footer">
            <span className="footer-btn">
                <Link to='listone'>Listone</Link>
            </span>
        </div>
    )
}