// import react dependency
import React from 'react';

// import presentational component
import DrumMachine from "./components/DrumMachine.js";

// import css style rules
import './App.scss';

// app's main parent app w/o wrapper basically a container
export default function DMApp() {

  return (

    <div className="DMApp">

      <h1 id="app-title">A Simple React Drum Machine</h1>

      <DrumMachine />

    </div>

  );

}