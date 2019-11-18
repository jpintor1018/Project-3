import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Profile from "./pages/Profile";
import MenuBar from './Components/menus/MenuBar'
// import Navbar from './Components/Navbar'
import Home from './pages/OAuth'



// import About from "./pages/About";
// import Search from "./pages/Search";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import OAuth from './pages/OAuth';

const App = () => {
    return (
        
        <Router history={history}>
            <Switch>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/profile" component={Profile} />
                <Route path="/home" exact component={Home} />
                <Route path="/signup" exact component={OAuth} />
            </UserProvider>


            </Switch>
        </Router>
       
    );
};

export default App;