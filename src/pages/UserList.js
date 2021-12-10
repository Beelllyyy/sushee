import React, {useState, useContext, useRef} from 'react'
import {Context} from '../contexts/Context'
import User from '../Components/User'
import NewUser from '../Components/NewUser'
import useOnClickOutside from '../Hooks/useOutsideClick'

export default function UserList() {
    const {userList, setUserList} = useContext(Context)
    const [uSure, setUSure] = useState(false)
    const [saving, setSaving] = useState(false)
    console.log(userList)
    const userElements = userList.map(user => <User key={user.name} user={user} />)

    const refDelete = useRef()
    useOnClickOutside(refDelete, () => setUSure(false))

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
                <span className="button button-delete" onClick={handleDelete} ref={refDelete}>{uSure ? "U sure bruh?" : "Delete All"}</span>
                <span className="button button-save" onClick={handleSave}>{saving ? "Not yet available" : "Save"}</span>
                </div>
            </div>
            {userElements}
            <NewUser />
        </div>
    )
}

