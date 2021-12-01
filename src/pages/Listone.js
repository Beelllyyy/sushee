import React, {useContext} from 'react'
import {Context} from "../Context";

export default function Listone() {
    const {getListone} = useContext(Context)
    const listone = getListone()
    console.log(listone)
    const listoneEl = listone.map(dish => (
        <div className='listone-items'>
            <span className='dish'>{dish.code}</span>
            <span>x</span>
            <span className='dish'>{dish.qnt}</span>
        </div>
    ))

    return(
        <div className='listone-container'>
            {listoneEl}
        </div>

    )
}