import React, { Component } from "react";
import Introduction from './Introduction.js'
import Project from './Project'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Resume from './Resume'

class Navigation extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Project") {
      return <Project />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Resume") {
      return <Resume />;
    } else {
      return <Introduction />
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Navigation;