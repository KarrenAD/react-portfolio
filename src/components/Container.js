import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home/index";
import Portfolio from "./Portfolio/index";
import Form from "./Contact/index"
import Footer from "./Footer/Footer";  



class Container extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/react-portfolio" component={Home}/>
                    <Route exact path="/projects" component={Portfolio}/>
                    <Route exact path="/contact" component={Form}/>
                    <Footer />
                </div>
            </Router>
        )
    }
}



export default Container;




//API CALL

//STORE API DATA INTO A STATE -> TRICKLE DOWN INTO LOWER COMPONENTS



