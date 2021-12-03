import React, {useContext} from 'react'
import {Context} from "../Context";

export default function Listone() {
    const {getListone} = useContext(Context)
    const listone = getListone()
    console.log(listone)
    const listoneEl = listone.map(dish => (
        <div className='dishCard'>
            <span className='dish code'>{dish.code}</span>
            <span>x</span>
            <span className='dish qnt'>{dish.qnt}</span>
        </div>
    ))

    return(
        <div className='Listone'>
            {listoneEl}
        </div>

    )
}