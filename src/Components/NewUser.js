import React, {useContext} from 'react'
import {Context} from "../Context";

export default function NewUser() {
    const {addNewUser} = useContext(Context)

    let userNameInput = React.createRef()

    function handleAddUser() {
        console.log(`IL TIPO E' ${typeof userNameInput.current.value}`)
        addNewUser(userNameInput.current.value)
    }


    return(
        <div className="UserCard NewUser">
            <button className="btn__addUser" onClick={handleAddUser}>Add person</button>
                <div>
                        <input type="text" ref={userNameInput}/>
                        <span>X</span>
                </div>

        </div>
    )

}

