import React from 'react'

function Header(props) {
    return (
        <>
    <div className="nav">
        <a
          href="#Home"
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>

        <a
          href="#Projects"
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          Project
        </a>

        <a
          href="#Contact"
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>

        <a
          href="#Resume"
          className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      
    </div>
    </>
    )
}

export default Header

