import React from "react";
import WeatherInfo from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Wed</div>
                    <WeatherInfo code="01d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19º</span>
                        <span className="WeatherForecast-temperature-min">10º</span>
                    </div>
                </div>
            </div>
        </div>
    )
}