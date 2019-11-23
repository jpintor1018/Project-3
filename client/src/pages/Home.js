import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/NavBar";
import Seating from "../components/Seating";
import Date from "../components/Date";
import Parallax from "../components/Parallax";
// import Host from "./pages/Host"
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const Home = () => (
  <div className="main-body">
    <Navbar />
    <Parallax />
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
  //       <Route exact path="/" component={Home} />
  //     </Switch>
  //   </div>
  // </Router>
);

export default Home;