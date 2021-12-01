import React, {useContext, useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import avatar from '../media/avatar.png'
import {Context} from '../Context'
import useOnClickOutside from "../Hooks/useOutsideClick"

function User({user}) {
    const {removeUser} = useContext(Context)
    const [isEditing, setEditing] = useState(false)
    const dishesEl = user.dishes.map(dish => <span key={dish.code} className="dish">{dish.code} {dish.qnt > 1 ? <span> x{dish.qnt}</span> : null}</span>)
    const userPath = `users/${user.name}`
    const newDishEl = <span className="dish userCard__dishes__new"> </span>

    const refUser = useRef()
    useOnClickOutside(refUser, () => setEditing(false))

    function handleEdit() {
        setEditing( true)
    }

    const cancelEl = <span
        className="UserCard__cancel"
        onClick={() => removeUser(user.pos)}
        >x</span>

    console.log(`${user.name} ${isEditing}`)

    return (
        <Link to={userPath} className="UserCard">


                <div className="UserCard__avatar__container" ref={refUser} onClick={handleEdit}>
                    <img className="UserCard__avatar__img" src={avatar} alt="avatar" /> {/*make it such that when you add person, it has a default icon, then clocking on it allows to change it from list*/}
                </div>


            <div className="UserCard__info">
                <h3 className="UserCard__name">{user.name}</h3>
                <div className="UserCard__dishes">{dishesEl}</div>
                {isEditing ? cancelEl : null}
            </div>


        </Link>
        )

}

export default User