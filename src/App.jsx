// import React, { useState, useEffect, Component } from "react"
import './App.css'
import CurrencieList from "./components/CurrencieList";
import InputField from "./components/InputField";

function App() {
    return (
      <>
        <h1>Currency Converter</h1>
        <div className="input-group">
          <InputField></InputField>
          <CurrencieList></CurrencieList>
        </div>
        <h2>to</h2>
        <div className="input-group">
          <InputField></InputField>
          <CurrencieList></CurrencieList>
        </div>
      </>
    )
}

export default App;


// Get Currencies
// https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58