import React from 'react'
import avatar from '../media/avatar.png'
import {Context} from '../Context'

function User({user}) {

    const dishesEl = user.dishes.map(dishCode => <p className="userCard__dishes__code">{dishCode}</p>)

    return (
        <div className="UserCard">
            <div className="UserCard__avatar__container">
                <img className="UserCard__avatar__img" src={avatar} alt="avatar"/> {/*make it such that when you add person, it has a default icon, then clocking on it allows to change it from list*/}
            </div>
            <div className="UserCard__info">
                <h3 className="UserCard__name">{user.name}</h3>
                <div className="UserCard__dishes">{dishesEl}</div>
            </div>
        </div>
        )

}

export default User