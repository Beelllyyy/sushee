import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserCards from './pages/UserCards'
import UserPage from './pages/UserPage'
import Footer from './pages/Footer'
function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<UserCards />} />
                <Route path='/users/:userName' element={<UserPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;


// TODO: add feature to add / remove dishes