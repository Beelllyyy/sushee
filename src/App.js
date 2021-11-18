import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Home from './Home'
import Orders from './Orders'

function App() {
    return (
        <div className="App">
            <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route>
                        <Orders />
                    </Route>
                </Switch>
        </div>
    );
}

export default App;
