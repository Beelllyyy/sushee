import React, {useContext} from 'react'
import {Context} from '../Context'
import User from '../Components/User'
import NewUser from '../Components/NewUser'

export default function UserCards() {
    const {userList} = useContext(Context)
    console.log(userList)
    const userElements = userList.map(user => <User key={user.name} user={user} />)

    return(
        <div className="container__main">
            {userElements}
            <NewUser />
        </div>
    )
}

