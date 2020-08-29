import React from "react";
import bored from "./Images/bored.png"
import bier from "./Images/bier.png"
import weather from "./Images/weather.png"

const Portfolio = () => {
    return (
        // 
        <div class="container h-50 bg-dark">
            <div class = "row mt-3">
                <div class = "col-md-8">
                    <div class = "page-header">
                        <h1 class= "mt-4 text-white ">Portfolio</h1>
                    </div>
                </div>
            </div>

            <div class = "row">

                {/* CARD ONE */}
                <div class="col-md-4">
                    <div class="mb-5 mt-3 card bg-secondary">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title text-center">Entertainment App!</h5>
                            </div>
                        <div class="row">
                            <a class = "card-link text-warning" href="https://karrenad.github.io/p1-entertainment-suggestions/">
                                <img 
                                    src={bored} 
                                    alt="entertainment app"
                                />
                            </a>
                        </div>
                        <div class="mt-1 row">                            
                            <p class = "text-warning"> Frontend app, featuring third party API calls! </p>
                        </div>
                        </div>
                    </div>                    
                </div>

                {/* CARD TWO */}
                <div class="col-md-4">
                    <div class="mb-5 mt-3 card bg-secondary">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title text-center">BIER RUN!</h5>
                            </div>
                        <div class="row">
                            <a class = "card-link text-warning" href="https://bier-run.herokuapp.com/">
                                <img 
                                    src={bier} 
                                    alt="BIER RUN"
                                />
                            </a>
                        </div>
                        <div class="mt-1 row">
                            <p class = "text-warning"> THE Beer Delivery App for SLC </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* CARD THREE */}
                <div class="col-md-4">
                    <div class="mb-5 mt-3 card bg-secondary">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title text-center">Weather App!</h5>
                            </div>
                        <div class="row">
                            <a class = "card-link text-warning" href="https://karrenad.github.io/w6hw-weather-api/">
                                <img
                                    src={weather}
                                    alt="Weather Application"
                                />
                            </a>
                        </div>
                        <div class="mt-1 row">
                            <p class = "text-warning"> Weather Forecaster, Featuring OpenWeather </p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* SMALLER ASSIGNMENTS */}





            </div>




        </div>

        
    )
}

export default Portfolio;