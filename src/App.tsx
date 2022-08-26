import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { AdDesigner } from "./components/AdDesigner";
import { Votes } from "./components/Votes";
import { Ad } from "./components/Ad";

function App() {
  return (
    <div className="App">
      <Header user="Welcome Chirpus"></Header>
      <Ad flavor={"Chocolate"} fontSize={45} darkTheme={false}></Ad>
      <Ad flavor={"Vanilla"} fontSize={45} darkTheme={false}></Ad>
      <Ad flavor={"Strawberry"} fontSize={45} darkTheme={false}></Ad>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
