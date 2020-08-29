import React from "react";
import navy from "./Images/navy.png";
import uofu from "./Images/uofu.png";

const Footer = () => {
    return(
        <div className ="container h-50 ">
            
            <div className = "row mt-3">
                <div className = "col-md-8">
                </div>
            </div>

            <div className ="row mt-3">

                <div className ="col-md-3">
                </div>
                <div className ="col-md-5">
                    <img
                        src={navy}
                    />

                <img
                        src={uofu}
                    />
                </div>
                <div className="col-md-3">
                </div>

            </div>
        </div>
    )


}

export default Footer;