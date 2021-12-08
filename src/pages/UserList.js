import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import User from '../Components/User'
import NewUser from '../Components/NewUser'

export default function UserList() {
    const {userList, setUserList} = useContext(Context)
    const [uSure, setUSure] = useState(false)
    const [saving, setSaving] = useState(false)
    console.log(userList)
    const userElements = userList.map(user => <User key={user.name} user={user} />)

    function handleDelete() {
        if (!uSure) {
            setUSure(true)
        } else {
            setUserList(prevList => [])
            setUSure(false)
        }   
    }

    function handleSave() {
        setSaving(prevState => !prevState)  
    }

    return(
        <div className="UserList">
            <div className='header'>
                <div className='commands'>
                <span className="button button-delete" onClick={handleDelete}>{uSure ? "U sure bruh?" : "Delete All"}</span>
                <span className="button button-save" onClick={handleSave}>{saving ? "Not yet available" : "Save"}</span>
                </div>
            </div>
            {userElements}
            <NewUser />
        </div>
    )
}

