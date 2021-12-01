import React, {useContext, useState} from 'react'
import {Context} from "../Context";


export default function NewDish(props) {
    const {addDish} = useContext(Context)
    const [isAdding, setAdding] = useState(false)
    console.log(`1 ${isAdding}`)
    const user = props.user

    let refDishCode = React.createRef()

    function handleAdd() {
        const newDish = refDishCode.current.value
        console.log(newDish)
        const hasAdded = addDish(user, newDish)
        if (hasAdded === 'existing') {
            refDishCode.current.value = ""
            refDishCode.current.placeholder = 'Already in list'
        } else {
            refDishCode.current.value = ""
        }
        setAdding(false)
    }

    const addElement = isAdding ?
        <div>
            <input type={"text"} ref={refDishCode}/>
            <span onClick={handleAdd}>
                [V]
            </span>
            <span onClick={() => setAdding(false)}>
                [X]
            </span>
        </div> :
        <div
            className="dish"
            onClick={() => setAdding(true)}
        >+</div>

    return(
        <div className="dish-box">
            {addElement}
        </div>
    )

}

