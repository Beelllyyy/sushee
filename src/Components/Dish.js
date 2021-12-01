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
        <div className='dish-box' ref={refDish} onClick={handleEdit}>
            <div className='dish-numbers'>
                <div className="userCard__dishes__code">
                    {code}
                </div>
                x
                <div className='dish-minus userCard__dishes__code'>
                    {isEditing ? <span onClick={() => subQnt(user, code)}>-</span> : null}
                </div> {/*temporary classes userCard__* */}
                <div className="userCard__dishes__code">
                    {qnt}
                </div>
                <div className='dish-plus userCard__dishes__code'>
                    {isEditing ? <span onClick={() => addQnt(user, code)}>+</span> : null}
                </div>
            </div>

        </div>
    )
}