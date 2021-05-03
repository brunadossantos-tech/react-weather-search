import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input 
                        type="search" 
                        placeholder="Enter a city"
                        className="form-control"/>
                    </div>
                    <div className="col-3">
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1>
            Oslo
        </h1>
        <ul>
            <li>Monday 11:00</li>
            <li> Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="sunny"/>
                6ºC
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 70%</li>
                    <li>Wind: 10 km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}