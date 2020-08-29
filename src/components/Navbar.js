import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="text-white bg-secondary px-2 navbar-brand">Austin Karren</a>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            About 
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Link>
                    </li> */}

                    
                </ul>
            </div>
      </nav>

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