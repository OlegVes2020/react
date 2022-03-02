import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Profile1 from './pages/profile1';
import Charts from './pages/charts';
import { Link } from 'react-router-dom'


function App() {
    return(
    <BrowserRouter>
        <h1>Welcome</h1>

        <header>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/charts">chats</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
            </ul>
        </header>


        <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile1} />
                <Route path="/charts" component={Charts} />
            </Switch>
    </BrowserRouter>

    );
}

export default App;
