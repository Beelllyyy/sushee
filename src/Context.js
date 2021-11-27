import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {


    const [userList, setUserList] = useState(
        [
            {
                pos: 0,
                name: "Bee",
                dishes: [1,3,4,5]
            },
            {
                pos: 1,
                name: "HaLee",
                dishes: [43,56,2]
            },
            {
                pos: 2,
                name: "NordVPN",
                dishes: [34,13,65,32,43,43,43]
            },
            {
                pos: 3,
                name: "Rendamerda",
                dishes: [23,5,6,1]
            },
            {
                pos: 4,
                name: "Weekill81",
                dishes: [2,4,5]
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