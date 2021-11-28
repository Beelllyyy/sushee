import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {


    const [userList, setUserList] = useState(
        [
            {
                pos: 0,
                name: "Bee",
                dishes: ["G1","N3","N4",5]
            },
            {
                pos: 1,
                name: "Gino",
                dishes: ["43","56","2"]
            },
            {
                pos: 2,
                name: "Pippo",
                dishes: ["A34","U13","U65","T4-bis","43","43",]
            },
            {
                pos: 3,
                name: "Franco",
                dishes: ["23","5","6","1"]
            },
            {
                pos: 4,
                name: "Beppe",
                dishes: ["2","4","5"]
            }
        ])

    function addNewUser(newName) {
        const newUser = {pos: userList.length, name: newName, dishes: []} // creating user object to plug into list of users
        setUserList(prevUserList => [...prevUserList, newUser])
    }

    return(
        <Context.Provider value={{
            userList,
            addNewUser
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}