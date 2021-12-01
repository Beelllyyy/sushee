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

    function addQnt(userName, code) {
        const userIndex = userList.findIndex( user => user.name === userName)
        const dishIndex = userList[userIndex].dishes.findIndex(dish => dish.code === code)
        const updatedUser = userList[userIndex]
        updatedUser.dishes[dishIndex].qnt = updatedUser.dishes[dishIndex].qnt + 1
        const updatedList = userList.slice()
        updatedList[userIndex] = updatedUser

        setUserList(updatedList)
    }
    function subQnt(userName, code) {
        // Retrieve object indexing
        const userIndex = userList.findIndex( user => user.name === userName)
        const dishIndex = userList[userIndex].dishes.findIndex(dish => dish.code === code)
        // Build updated user info
        const updatedUser = userList[userIndex]
        updatedUser.dishes[dishIndex].qnt = updatedUser.dishes[dishIndex].qnt - 1
        if (updatedUser.dishes[dishIndex].qnt === 0) {
            updatedUser.dishes.splice(dishIndex, 1)
        }
        const updatedList = userList.slice()
        updatedList[userIndex] = updatedUser
        setUserList(updatedList)
    }

    function addDish(userName, newCode) {
        const userIndex = userList.findIndex( user => user.name === userName)
        const dishIndex = userList[userIndex].dishes.findIndex(dish => dish.code === newCode)
        if (dishIndex === -1) {
            // if doesn't already exist
            const updatedUser = userList[userIndex]
            updatedUser.dishes.push({code: newCode, qnt: 1})
            const updatedList = userList.slice()
            updatedList[userIndex] = updatedUser
            setUserList(updatedList)
        } else {
            return 'existing'
        }
    }

    function getListone() {
        let objectone = {}
        // this will create an object with one key per dish and quantities in corresponding values
        for (let i=0; i<userList.length; i++) {
            const target = userList[i].dishes
            for (let j=0; j<target.length; j++) {
                const code = userList[i].dishes[j].code
                const qnt = userList[i].dishes[j].qnt
                objectone[code] = objectone[code] ? objectone[code] += qnt : objectone[code] = qnt
            }
        }
        // convert listone object into mappable array of type [{code:..,qnt:...},...]
        const listone = []
        Object.keys(objectone).forEach(key => listone.push({
            code: key,
            qnt: objectone[key]
        }))

        return listone
    }

    return(
        <Context.Provider value={{
            userList,
            addNewUser,
            removeUser,
            addQnt,
            subQnt,
            addDish,
            getListone
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}