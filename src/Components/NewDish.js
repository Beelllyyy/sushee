import React, {useContext, useState} from 'react'
import {Context} from "../Context";


export default function NewDish(props) {
    const {addDish} = useContext(Context)
    const [isAdding, setAdding] = useState(false)

    const user = props.user

    let refDishCode = React.createRef()

    function handleAdd() {
        const newDish = refDishCode.current.value
        if (newDish) {
            const hasAdded = addDish(user, newDish)
            refDishCode.current.value = ""
            if (hasAdded === 'existing') {
                refDishCode.current.placeholder = 'Already in list'
            }
            setAdding(false)
        }
    }

    const addElement = isAdding ?
        <div className='newDishCard'>
            <input type="text" ref={refDishCode}/>
            <span className='icon confirm' onClick={handleAdd}>
                [V]
            </span>
            <span className='icon cancel' onClick={() => setAdding(false)}>
                [X]
            </span>
        </div> :
        <div
            className="icon add"
            onClick={() => setAdding(true)}
        >+</div>

    return(
        <>
            {addElement}
        </>
    )

}

