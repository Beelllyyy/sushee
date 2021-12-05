import React, {useContext, useRef, useState} from 'react'
import {Context} from "../Context"
import useOnClickOutside from "../Hooks/useOutsideClick";

export default function Dish(props) {
    const {code, qnt} = props.data
    const user = props.user
    const [isEditing, setEditing] = useState(false)
    const {addQnt, subQnt} = useContext(Context)

    const refDish = useRef()
    useOnClickOutside(refDish, () => setEditing(false))

    function handleEdit() {
        setEditing(true)
    }



    return(
        <div className='dishCard' ref={refDish} onClick={handleEdit}>
                <div className="dish code">
                    {code}
                </div>
                <span className='x'>x</span>
                <div className='qnt'>
                {isEditing ?
                <div className='btn-minus'>
                    <span onClick={() => subQnt(user, code)}>-</span>
                </div>
                    : null
                }
                <div className="dish">
                    {qnt}
                </div>
                {isEditing ?
                    <div className='btn-plus'>
                        <span onClick={() => addQnt(user, code)}>+</span>
                    </div> :
                    null
                }
                </div>
        </div>
    )
}