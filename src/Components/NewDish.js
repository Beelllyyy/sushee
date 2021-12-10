import React, {useContext, useState, useRef} from 'react'
import {Context} from "../contexts/Context";
import useOnClickOutside from '../Hooks/useOutsideClick'

export default function NewDish(props) {
    const {addDish} = useContext(Context)
    const [isAdding, setAdding] = useState(false)

    const user = props.user

    let refDishCode = React.createRef()

    const refCard = useRef()
    useOnClickOutside(refCard, () => setAdding(false))

    function handleAdd() {
        let newDish = refDishCode.current.value
        // Input integrity: all codes uppercase
        newDish = newDish.toUpperCase()
        if (newDish) {
            const hasAdded = addDish(user, newDish)
            refDishCode.current.value = ""
            if (hasAdded === 'existing') {
                refDishCode.current.placeholder = 'Already in list'
            } else {
                setAdding(false)
            }
        }
    }

    const addElement = isAdding ?
        <div className='newCard' ref={refCard}>
            <input type="text" ref={refDishCode} placeholder='Dish code'/>
            <span className='icon-cancel' onClick={() => setAdding(false)}>
                x
            </span>
            <span className='icon-confirm' onClick={handleAdd}>
                v
            </span>
        </div> :
        <div
            className="button-add add-dish"
            onClick={() => setAdding(true)}
        >+</div>

    return(
        <>
            {addElement}
        </>
    )

}

