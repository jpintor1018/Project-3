import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
// import Seating from "../Seating";
// import Date from "../Date";
import Parallax from "../Parallax";
import App from "../Button";
import "./style.css";

const Home = () => (
 
  <div className="main-body">
    <Navbar />
    <div className="parallax">
      <Parallax />
    </div>
    <div className="row">
      <div className="col">
        <div className="container">
          <h1 className="animated rotateIn ">Make your Reservations</h1>
          <div id="contain-btn" className="animated rollIn">
            <div id="button" style={{ position: "relative", zIndex: "1" }}></div>
            <App />
          </div>
        </div>
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

export default Home;
