import React, {useContext} from 'react'
import {Context} from '../Context'
import {useParams, Link} from 'react-router-dom'
import Dish from '../Components/Dish'
import NewDish from '../Components/NewDish'
import avatar from "../media/avatar.png";


export default function UserPage() {
    const {userName} = useParams()
    const {userList} = useContext(Context)
    console.log(userList)
    const thisUser = userList.find(user => user.name === userName)
    const dishesEl = thisUser.dishes.map(dish => <Dish user={userName} data={dish} />)
    return(
        <div className='UserPage'>
            <div className='UserPage-header'>
                <div className="commands">
                    <span className="icon cancel">[delete]</span>
                    <Link to="/"><span className="icon cancel">[X]</span></Link>
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
