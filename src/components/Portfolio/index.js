import React from "react";
import bored from "./Images/bored.png"
import bier from "./Images/bier.png"
import weather from "./Images/weather.png"

const Portfolio = () => {
    return (
        // 
        <div className="container h-50 bg-dark">
            {/* <div className = "row mt-3">
                <div className = "col-md-8">
                    <div className = "page-header">
                        <h1 className= "mt-4 text-white ">Portfolio</h1>
                    </div>
                </div>
            </div> */}

            <div className = "row mt-3">

                {/* CARD ONE */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title text-center">Entertainment App!</h5>
                            </div>
                        <div className="row">
                            <a className = "card-link text-warning" href="https://karrenad.github.io/p1-entertainment-suggestions/">
                                <img 
                                    src={bored} 
                                    alt="entertainment app"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row">                            
                            <p className = "text-warning"> Frontend app, featuring third party API calls! </p>
                        </div>
                        </div>
                    </div>                    
                </div>

                {/* CARD TWO */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title text-center">BIER RUN!</h5>
                            </div>
                        <div className="row">
                            <a className = "card-link text-warning" href="https://bier-run.herokuapp.com/">
                                <img 
                                    src={bier} 
                                    alt="BIER RUN"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row">
                            <p className = "text-warning"> THE Beer Delivery App for SLC </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* CARD THREE */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title text-center">Weather App!</h5>
                            </div>
                        <div className="row">
                            <a className = "card-link text-warning" href="https://karrenad.github.io/w6hw-weather-api/">
                                <img
                                    src={weather}
                                    alt="Weather Application"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row">
                            <p className = "text-warning"> Weather Forecaster, Featuring OpenWeather </p>
                        </div>
                        </div>
                    </div>
                </div>

            {/* SMALLER ASSIGNMENTS */}

              {/* <div className = "col-md-4">                
              </div> */}
              <div className="col-md-4">
                <div className="mb-5 mt-3 card bg-secondary" >
                  <div className="card-body">
                    <div className="row">
                      <h5 className="card-title text-center">SMALL BUT NOTEWORTHY APPS!</h5>
                    </div>
                    <div className="mt-1 row">
                      <a className = "card-link text-warning" href="https://karrenad.github.io/w5hw-day-planner/"> Day Planner</a>
                    </div>
                    <div className="mt-1 row">
                      <a className = "card-link text-warning" href="https://karrenad.github.io/w3hw-password-generator/"> Password Generator</a>
                    </div>
                    <div className="mt-1 row">
                      <a className = "card-link text-warning" href="https://github.com/KarrenAD/w9hw-readme-generator"> NodeJS README Generator</a>
                    </div>
                    <div className="mt-1 row">
                      <a className = "card-link text-warning" href="https://github.com/KarrenAD/w12hw-employee-tracker"> SQL Employee Database</a>
                    </div>
                  </div>
                </div>
              </div>








            </div>




        </div>

        
    )
}

export default Portfolio;