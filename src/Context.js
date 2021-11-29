import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [userList, setUserList] = useState(
        [
            {
                pos: 0,
                name: "Bee",
                dishes:

                    [{code: "G1",
                        qnt: 1},
                        {code: "N3",
                            qnt: 3},
                        {code: "N4",
                            qnt: 2},
                        {code: "F5",
                            qnt: 2}]

            },
            {
                pos: 1,
                name: "Gino",
                dishes:

                    [{code: "43",
                        qnt: 1},
                        {code: "56",
                            qnt: 1},
                        {code: "2",
                            qnt: 1}]

            },
            {
                pos: 2,
                name: "Pippo",
                dishes:

                    [{code: "A34",
                        qnt: 1},
                        {code: "U13",
                            qnt: 1},
                        {code: "U65",
                            qnt: 1},
                        {code: "T4-bis",
                            qnt: 1},
                        {code: "A43",
                            qnt: 2}]

            },
            {
                pos: 3,
                name: "Franco",
                dishes:

                    [{code: "U23",
                        qnt: 1},
                        {code: "F5",
                            qnt: 1},
                        {code: "U6",
                            qnt: 1},
                        {code: "U1",
                            qnt: 1}]

            },
            {
                pos: 4,
                name: "Beppe",
                dishes:

                    [{code:"N2", qnt: 1},
                        {code:"N4", qnt: 1},
                        {code:"F5", qnt: 1}]

            }
        ])

    function addNewUser(newName) {
        const newUser = {pos: userList.length, name: newName, dishes: []} // creating user object to plug into list of users
        setUserList(prevUserList => [...prevUserList, newUser])
    }

    function removeUser(pos) {
        setUserList(prevList => prevList.filter(el => !(prevList.indexOf(el) === pos))

        )
    }

    return(
        <Context.Provider value={{
            userList,
            addNewUser,
            removeUser
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}