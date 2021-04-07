import React from 'react'

function Header(props) {
    return (
        <>
    <div className="nav">
        <button
          href="#Project"
          onClick={() => props.handlePageChange("Project")}
          className={props.currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Project
        </button>

        <button
          href="#Contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </button>

        <button
          href="#Resume"
          onClick={() => props.handlePageChange("Resume")}
          className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </button>
      
    </div>
    </>
    )
}

export default Header

