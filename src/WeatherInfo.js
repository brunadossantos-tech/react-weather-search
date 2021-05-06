import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-6">
                    <h1>
                    {props.data.city}
                 </h1>
                <ul>
                    <li><CurrentDate date={props.data.date}/></li>
                    <li className="text-capitalize description"> {props.data.description}</li>
                </ul>
            </div>
            <div className="col-6">
                <div className="temperature-container d-flex justify-content-end">
                        <WeatherIcon code={props.data.icon} size={60} color="#ffcab0"/>
                <div>
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
            </div>
            <div className="row container-fluid ml-2 mt-4 mb-4">
                <div className="col mr-2 details">
                    <strong>Feels:</strong> {Math.round(props.data.feels)}ºC
                    </div>
                <div className="col mr-2 details">
                    <strong>Humidity:</strong> {props.data.humidity} %
                </div>
                <div className="col mr-2 details">
                    <strong>Wind: </strong>{props.data.wind} km/h
                </div>
                </div>
            </div>
        </div>
    
    );
}