import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserCards from './pages/UserCards'
import UserPage from './pages/UserPage'
import Listone from './pages/Listone'
import Footer from './pages/Footer'
function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<UserCards />} />
                <Route path='/users/:userName' element={<UserPage />} />
                <Route path='/listone' element={<Listone />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;


// TODO: refactor classes: create a base design with BODY and FOOTER. Inside body, render stuff. BODY always ..% of VH.