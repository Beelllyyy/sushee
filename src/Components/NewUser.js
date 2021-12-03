import React, {useContext, useState} from 'react'
import {Context} from "../Context";

export default function NewUser() {
    const {addNewUser} = useContext(Context)
    const [isAdding, setAdding] = useState(false)

    let refUserName = React.createRef()

    function handleAdd() {
        const newUser = refUserName.current.value
        if (newUser) {
            const hasAdded = addNewUser(newUser)
            refUserName.current.value = ""
            if (hasAdded === 'existing') {
                refUserName.current.placeholder = "Name already in use"
            }
            setAdding(false)
        }
    }

    const addElement = isAdding ?
        <div className='UserCard last'>
            <input type='text' ref={refUserName}/>
            <span className='icon confirm' onClick={handleAdd}>
                [V]
            </span>
            <span className='icon cancel' onClick={() => setAdding(false)}>
                [X]
            </span>
        </div> :
        <div
            className="icon-add last"
            onClick={() => setAdding(true)}
        >+</div>

    return (
        <>
            {addElement}
        </>

    )

}