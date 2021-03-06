import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "./button.css"


const Navbar = () => {
    const location = useLocation();
    return(
        <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="text-white bg-secondary px-2 navbar-brand">Austin Karren</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link to="/react-portfolio" className={location.pathname === "/react-portfolio" ? "nav-link active" : "nav-link"}>
                            About 
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li>                     
                </ul>

                {/* <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label> */}

            </div>
      </nav>
      </div>

    )
}

export default Navbar;


// function App() {
//     return (
//         <main>
//             <Switch>
//                 <Route path="/" component={Home} exact />
//                 <Route path="/about" component={About} />
//                 <Route path="/shop" component={Shop} />
//             </Switch>
//         </main>
//     )
// }