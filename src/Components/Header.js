import React, {useState, useEffect} from 'react'
import User from './User'

export default function Header() {
    const [userList, setUserList] = useState(['pippo', 'franco'])  // in Header ho uno state per tenere gli utenti e modificarli

    function removeUser(user) {
        setUserList(prevUserList => prevUserList.filter(usersInList => usersInList !== user))
    }

    function addUser(user){
        setUserList(prevUserList => prevUserList.push(user))
    }

    const JSXUserList = userList.map(user => (
        <div className='user'>
            <div className='user__logo'> </div>
            <div className="user__name">{user}</div>
        </div>
    ))

    return(
        <div className="Header">
            {JSXUserList}
        </div>
    )

}