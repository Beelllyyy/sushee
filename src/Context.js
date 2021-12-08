import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [userList, setUserList] = useState(() => {
        const saved = localStorage.getItem('session')
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })

    function addNewUser(userName) {
        // check if name already exists
        const userIndex = userList.findIndex( user => user.name === userName)
        // if doesn't exist, add
        if (userIndex === -1) {
            const newUser = {pos: userList.length, name: userName, dishes: []} // creating user object to plug into list of users
            setUserList(prevUserList => [...prevUserList, newUser])
        }
        // otherwise return string to handle error
        return 'existing'
    }

    function removeUser(name) {
        const userIndex = userList.findIndex( user => user.name === name)
        setUserList(prevList => prevList.filter(user => user.name !== name) )
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
            setUserList,
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