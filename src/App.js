import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>
        Weather App
      </h1>
      <Weather />
      <footer>
        This project was coded by {""}
        <a href="https://practical-goldberg-8caec7.netlify.app/" target="_blank">Bruna Santos</a> and is{" "}
        <a href="https://github.com/brunadossantos-tech/react-weather-search.git" target="_blank">open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}

