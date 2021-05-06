import React from "react";
import Weather from "./Weather";
import './App.css';
import rainbow from "./rainbow.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1 className="title">
        Weather App 
        <span>
         <img src={rainbow} alt="rainbow" />
        </span>
      </h1>
      <Weather defaultCity="Oslo" />
      <footer>
        This project was coded by {""}
        <a href="https://practical-goldberg-8caec7.netlify.app/" target="_blank" rel="noreferrer">Bruna Santos</a> and is open-sourced on{" "}
        <a href="https://github.com/brunadossantos-tech/react-weather-search.git" target="_blank" rel="noreferrer">GitHub</a> and hosted on{" "}
        <a href="https://amazing-allen-99af45.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
      </footer>
      </div>
    </div>
  );
}

