import React from 'react'

function Header(props) {
    return (
        <>
    <div className="nav">
        <button
          href="#Home"
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </button>

        <button
          href="#Projects"
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          Project
        </button>

        <button
          href="#Contact"
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </button>

        <button
          href="#Resume"
          className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </button>
      
    </div>
    </>
    )
}

export default Header

