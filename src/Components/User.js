import React from 'react'
import {Link} from 'react-router-dom'
import avatar from '../media/face.svg'


function User({user}) {

    // Dish elements: code and quantity
    const dishesEl = user.dishes.map(dish => (
        <span key={dish.code} className="dish-el">
            {dish.code}
            {dish.qnt > 1 ? <span> x{dish.qnt}</span> : null}
        </span>))

    const userPath = `/${user.name}`

    return (
        <Link to={userPath} className="UserCard">

            <div className="avatar">
                <img className="avatar-img" src={avatar} alt="avatar" /> {/*make it such that when you add person, it has a default icon, then clocking on it allows to change it from list*/}
            </div>

            <div className="UserCard-info">
                <h3 className="info-name">{user.name}</h3>
                <div className="info-dish-container">{dishesEl}</div>
            </div>

        </Link>
        )

}

export default User