import React, {useState} from 'react'

export default function User(props) {
    const [name, setName] = useState('')

    function handleClick(){

    }

    return(
        <div
            className='user-circle'
            onClick={handleClick}
        >
            <span>{name}</span>
        </div>
    )
}