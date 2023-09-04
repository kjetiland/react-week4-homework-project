import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
