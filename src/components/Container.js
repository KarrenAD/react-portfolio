import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/index";
import ProjectPage from "./Projects/index";
import Footer from "./Footer";  



class Container extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" components={ProjectPage}/>
                    <Footer />
                </div>
            </Router>
        )
    }
}



export default Container;




//API CALL

//STORE API DATA INTO A STATE -> TRICKLE DOWN INTO LOWER COMPONENTS



