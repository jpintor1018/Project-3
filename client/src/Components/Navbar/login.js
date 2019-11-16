import React, { Component } from "react";
import NavTabs from "./index";
// import Home from "./pages/Home";
// import About from "./pages/About";
import Signin from "../Auth/Signin";
import Contact from "../Auth/Signup";

class login extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Signin") {
      return <Signin />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default login;