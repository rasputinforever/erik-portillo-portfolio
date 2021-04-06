import React, { Component } from "react";
import Introduction from './Introduction.js'
import Project from './Project'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'

function Navigation() {
  const [currentPage, setCurrentPage] = React.setState("")

  function handlePageChange(page) {
    setCurrentPage(page)
  };

return (
    <>
    <Header />
        {currentPage === "" ? <Introduction /> : <></>}
        {currentPage === "Resume" ? <Resume /> : <></>}
        {currentPage === "Project" ? <Project /> : <></>} 
        {currentPage === "Contact" ? <Contact /> : <></>} 
    <Footer />
    </>
)

}

export default Navigation;