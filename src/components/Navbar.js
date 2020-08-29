import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="text-white bg-secondary px-2 navbar-brand">Austin Karren</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            About 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
      </nav>

    )
}

export default Navbar;
