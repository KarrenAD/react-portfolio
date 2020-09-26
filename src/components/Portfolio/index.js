import React from "react";
import bored from "./Images/bored.png"
import bier from "./Images/bier.png"
import weather from "./Images/weather.png"

const Portfolio = () => {
    return (
        // 
        <div className="container h-50 bg-dark">
            <div className = "row mt-3">
                {/* CARD ONE */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <h5 className="card-title text-center">Entertainment App!</h5>
                            </div>
                        <div className="row justify-content-center">
                            <a className = "card-link text-warning" href="https://karrenad.github.io/media-api-group-project/" target="_blank">
                                <img 
                                    src={bored} 
                                    alt="entertainment app"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row justify-content-center">                            
                            <p className = "text-warning"> Frontend app, featuring third party API calls! </p>
                        </div>
                        </div>
                    </div>                    
                </div>
                {/* CARD TWO */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <h5 className="card-title text-center">BIER RUN!</h5>
                            </div>
                        <div className="row justify-content-center">
                            <a className = "card-link text-warning" href="https://bier-run.herokuapp.com/" target="_blank">
                                <img 
                                    src={bier} 
                                    alt="BIER RUN"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row justify-content-center">
                            <p className = "text-warning"> THE Beer Delivery App for SLC </p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* CARD THREE */}
                <div className="col-md-4">
                    <div className="mb-5 mt-3 card bg-secondary">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <h5 className="card-title text-center">Weather App!</h5>
                            </div>
                        <div className="row justify-content-center">
                            <a className = "card-link text-warning" href="https://karrenad.github.io/local-weather/" target="_blank">
                                <img
                                    src={weather}
                                    alt="Weather Application"
                                />
                            </a>
                        </div>
                        <div className="mt-1 row justify-content-center">
                            <p className = "text-warning"> Weather Forecaster, Featuring OpenWeather </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SMALLER ASSIGNMENTS */}     
            <div class="row justify-content-center">
                <div className="mb-5 mt-3 card bg-secondary" >
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <h5 className="card-title text-center">SMALL BUT NOTEWORTHY APPS!</h5>
                    </div>
                    <div className="mt-1 row justify-content-center">
                      <a className = "card-link text-warning" href="https://karrenad.github.io/password-generator-two/" target="_blank"> Password Generator</a>
                    </div>
                    <div className="mt-1 row justify-content-center">
                      <a className = "card-link text-warning" href="https://karrenad.github.io/day-planner/" target="_blank"> Day Planner Web App</a>
                    </div>
                    <div className="mt-1 row justify-content-center">
                      <a className = "card-link text-warning" href="https://github.com/KarrenAD/readme-generator" target="_blank"> NodeJS README Generator</a>
                    </div>
                    <div className="mt-1 row justify-content-center">
                      <a className = "card-link text-warning" href="https://github.com/KarrenAD/mySQL-employee-database" target="_blank"> SQL Employee Database</a>
                    </div>
                  </div>
                </div>
            </div>

        </div>        
    )
}

export default Portfolio;