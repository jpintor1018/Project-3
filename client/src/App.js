import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Seating from "./Components/Seating";
import Date from "./Components/Date";
import Parallax from "./Components/Parallax";
// import Host from "./pages/Host"
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function App() {
  return (
    <div className="main-body">
        <Navbar />
        <Parallax/>
    <div id="container">
    <div className="row">
            <div className="col-s-2" id="date-html"><Date></Date></div>
            <div className="col-lg-9" id="seating-html"><Seating></Seating></div>

     </div>
    </div>
    </div>
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/" component={Host} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
