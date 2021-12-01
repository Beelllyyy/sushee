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
    const thisUser = userList.find(user => user.name === userName)  // careful to duplicate names possibility
    const dishesEl = thisUser.dishes.map(dish => <Dish user={userName} data={dish} />)
    return(
        <div className='UserPage'>
            <div className='UserPage__header'>
                <div className="UserPage__header__commands">
                    <span className="delete-icon">[delete]</span>
                    <Link to="/"><span className="cancel-icon">[X]</span></Link>
                </div>
                <div className="UserPage__header__user">
                    <div className="UserPage__header__user__avatar">
                        <img className="UserCard__avatar__img" src={avatar} alt="avatar" />
                    </div>
                    <div className="UserPage__header__user__name">
                        {thisUser.name}
                    </div>
                </div>
            </div>

            <div className="UserPage__body">
                <div className='dish-container'>{dishesEl}</div>
                <NewDish user={userName}/>
            </div>



        </div>
    )
}
