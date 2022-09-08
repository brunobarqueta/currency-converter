import React, { useState } from "react"
import './App.css'
import CurrencieList from "./components/CurrencieList";
import InputField from "./components/InputField";

const App = () => {
  const currencies = "";
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  
    return (
      <>
        <h1>Currency Converter</h1>
        <div className="input-group">
          <InputField value={valueFrom} setValue={value => setValueFrom(value)}></InputField>
          <CurrencieList currencies={currencies}></CurrencieList>
        </div>
        <h2>to</h2>
        <div className="input-group">
          <InputField value={valueTo} setValue={value => setValueTo(value)}></InputField>
          <CurrencieList currencies={currencies}></CurrencieList>
        </div>
      </>
    )
}

export default App;


// Get Currencies
// https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58