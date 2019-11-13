import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from './Components/Navbar'
import Seating from './Components/Seating';
import Date from './Components/Date';
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App(){
    return(
        <div id="container">
            {/* <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router> */}
        <div className="row">
                <div className="col xs={6}" id="date-html"><Date></Date></div>
                <div className="col xs={6}" id="seating-html"><Seating></Seating></div>
                
         </div> 
        </div>
         
        
    )
}

export default App;