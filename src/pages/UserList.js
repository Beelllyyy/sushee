import React, {useContext} from 'react'
import {Context} from '../Context'
import User from '../Components/User'
import NewUser from '../Components/NewUser'

export default function UserList() {
    const {userList} = useContext(Context)
    console.log(userList)
    const userElements = userList.map(user => <User key={user.name} user={user} />)

    return(
        <div className="UserList">
            {userElements}
            <NewUser />
        </div>
    )
}

