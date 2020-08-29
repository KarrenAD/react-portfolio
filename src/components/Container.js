import React, {Component} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";



class Container extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Home/>
                <Footer />
            </div>
        )
    }
}



export default Container;




//API CALL

//STORE API DATA INTO A STATE -> TRICKLE DOWN INTO LOWER COMPONENTS



