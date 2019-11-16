import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'




// import About from "./pages/About";
// import Search from "./pages/Search";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
    return (
        <Router>
            <div className="main-body">
                <Navbar />
                <Switch>
                    <Route exact path="/"  component={Home} />
                    <Route exact path="/signup"  component={Signup} />
                    <Route exact path="/signin"  component={Signin} />
                </Switch> 
            </div>
        </Router>
    )
}

export default App;