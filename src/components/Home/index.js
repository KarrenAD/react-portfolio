import React from "react";
import hs150200 from "./hs150200.jpg";
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
                    src={hs150200} 
                    alt="Austin's Headshot"
                />
              </div>

              <div className ="col-md-5 mt-3 mb-6">
                <p className = "text-white google-font" >
                  Austin is a programming student and problem-solving enthusiast. He began studying code in elementary school using the language "PC Logo". He is now going to school to learn full-stack web development and hopes to find full-time work in the field after he has graduated. When not working on code, Austin spends time with his family, strength trains, and plays video games socially with his friends and family. 
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