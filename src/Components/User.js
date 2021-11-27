import React from 'react'

import {Context} from '../Context'

function User({user}) {

    const dishesEl = user.dishes.map(dishCode => <span className="userCard__dishes__code">{dishCode}</span>)

    return (
        <div className="UserCard">
            <div className="UserCard__avatar">
                <span> </span> {/*make it such that when you add person, it has a default icon, then clocking on it allows to change it from list*/}
            </div>

            <h2>{user.name}</h2>
            <div className="UserCard__dishes">{dishesEl}</div>
        </div>
        )

}

export default User