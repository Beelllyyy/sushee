import userEvent from '@testing-library/user-event';
import React, {useContext, useState, useRef} from 'react'
import {Context} from "../contexts/Context";
import useOnClickOutside from '../Hooks/useOutsideClick'

export default function NewUser() {
    const {addNewUser} = useContext(Context)
    const [isAdding, setAdding] = useState(false)

    let refUserName = React.createRef()

    const refCard = useRef()
    useOnClickOutside(refCard, () => setAdding(false))

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
        <div className='newCard last' ref={refCard}>
            <input type='text' ref={refUserName} placeholder='User name'/>
            <span className='icon-cancel' onClick={() => setAdding(false)}>
                x
            </span>
            <span className='icon-confirm' onClick={handleAdd}>
                v
            </span>
        </div> :
        <div
            className="button-add last"
            onClick={() => setAdding(true)}
        >+ New mangione</div>

    return (
        <>
            {addElement}
        </>

    )

}