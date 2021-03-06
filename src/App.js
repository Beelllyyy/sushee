import React, {useEffect, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import UserList from './pages/UserList'
import UserPage from './pages/UserPage'
import Listone from './pages/Listone'
import Footer from './pages/Footer'
import { Context } from './Context'
function App() {

    const {userList} = useContext(Context)

    useEffect(() => localStorage.setItem("session", JSON.stringify(userList)), [userList])

    return (
        <div className="App">
            <div className="body">
                <Routes>
                    <Route exact path='/' element={<UserList />} />
                    <Route path='/:userName' element={<UserPage />} />
                    <Route path='/listone' element={<Listone />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;


// TODO: refactor classes: create a base design with BODY and FOOTER. Inside body, render stuff. BODY always ..% of VH.