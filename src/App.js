import React from 'react'
// import {Switch, Route} from 'react-router-dom'
import UserCards from './pages/UserCards'

function App() {

    return (
        <div className="App">

                <UserCards />

            <div className="container__footer">
                <button className={"btn__list"}>Listone</button>
            </div>
        </div>
    );
}

export default App;
