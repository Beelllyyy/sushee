import React, {useContext, useState} from 'react'
import {Context} from '../contexts/Context'
import {useParams, Link} from 'react-router-dom'
import Dish from '../Components/Dish'
import NewDish from '../Components/NewDish'
import avatar from "../media/avatar.png";


export default function UserPage() {
    const {userName} = useParams()
    const {userList, removeUser} = useContext(Context)
    const [holdOn, setHoldOn] = useState(true)
    console.log(userList)
    const thisUser = userList.find(user => user.name === userName)
    const dishesEl = thisUser.dishes.map(dish => <Dish user={userName} data={dish} />)

    function handleDelete() {
        if (holdOn) {
            setHoldOn(false)
        } else {
            removeUser(thisUser.name)
            setHoldOn(true)
        }
    }

    return(
        <div className='UserPage'>
            <div className='header'>
                <div className="commands">
                    <span className="button button-delete" onClick={handleDelete}>
                        {holdOn ? 'Delete user' : <Link to='/'>U sure bruh?</Link>}
                    </span>    
                    <span className="button button-back">
                        <Link to="/">back</Link>
                    </span>
                </div>
                <div className="user-info-container">
                    <div className="info-avatar">
                        <img className="avatar-img" src={avatar} alt="avatar" />
                    </div>
                    <div className="info-name">
                        {thisUser.name}
                    </div>
                </div>
            </div>

            <div className="dishList">
                {dishesEl}
            </div>
            <NewDish user={userName}/>


        </div>
    )
}
