import React from "react";
import hs2 from "./hs2.png";
import adkresume from "./adkresume.pdf"

const Home = () => {
    return(
        <div className ="container h-80 bg-dark">
        {/* <div className = "row mt-3">
          <div className = "col-md-8">
            <div className = "page-header">
              <h1 className= "mt-4 text-white google-font">About Austin</h1>
            </div>
          </div>
        </div> */}
        <div className ="row mt-3">
              <div className ="col-md-3 mt-3 mb-3">

                <img 
                    // className="img-thumbnail"
                    src={hs2} 
                    alt="Austin's Headshot"
                />
              </div>

              <div className ="col-md-5 mt-3 mb-6">
                <p className = "text-white google-font" >
                  Austin is a U of U-certified Full Stack Web Developer with a passion for collaborative problem solving and coding. He spent four years in the Navy as a computer hardware technician, troubleshooting and maintaining computer radar systems on the USS Cowpens. His immediate goal is to find work as a web developer and to be part of a team that develops the best web applications for their clients. 
                </p>
              </div>
              <div className="col-md-4 mt-3 mb-6">
                <div className="card bg-secondary">
                  <div className="card-body">
                    <h5 className="google-font card-title text-center">Austin's LinkedIn and GitHub</h5>
                    <p className="text-center google-font card-text">Want to see Austin's professional profile or peek at his code? Click the links below!</p>
                    <a href="https://www.linkedin.com/in/austin-karren-2ba879187/" className="google-font text-warning card-link">LinkedIn</a>
                    <a href="https://github.com/KarrenAD" className="google-font text-warning card-link">GitHub</a>
                    <a href={adkresume} className="google-font text-warning card-link">Resume</a>
                  </div>
                </div>
              </div>
        </div>
    </div>

    )
}

export default Home;