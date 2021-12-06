import React, {useContext} from 'react'
import {Context} from "../Context";
import {Link} from "react-router-dom";
import avatar from "../media/avatar.png";

export default function Listone() {
    const {getListone} = useContext(Context)
    const listone = getListone()
    console.log(listone)
    const listoneEl = listone.map(dish => (
        <div className='dishCard'>
            <span className='dish code'>{dish.code}</span>
            <span className='x'>x</span>
            <span className='dish qnt'>{dish.qnt}</span>
        </div>
    ))

    return(
        <div className="Listone">
            <div className='listone-header'>
                <Link to="/"><span className="icon-back">back</span></Link>
            </div>
            <div className='listone-container'>
                {listoneEl}
            </div>
        </div>
    )
}