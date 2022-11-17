import React, { useState, useEffect, useCallback } from "react"
import './App.css'
import CurrencieList from "./components/CurrencieList";
import InputField from "./components/InputField";

const App = () => {
  const [valueFrom, setValueFrom] = useState("100");
  const [valueTo, setValueTo] = useState("0");
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [currencyRateFrom, setCurrencyRateFrom] = useState("");
  const [currencyRateTo, setCurrencyRateTo] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const [auxValueFrom, setAuxValueFrom] = useState("");
  const [auxValueTo, setAuxValueTo] = useState("");


  const apiKey = "9886bf66fc546ad774a1";

  // Get currency list
  useEffect(async () => {
    const response = await fetch(`https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`);
    const data = await response.json();
    const results = data.results;
    const arrCurrencies = [];
    for (var x in results) {
      arrCurrencies.push({
        currencyName: results[x].currencyName,
        id: results[x].id,
        currencySymbol: results[x].currencySymbol
      })
    }
    setCurrencies(arrCurrencies);
    setValueFrom("100")
  }, [])

  // Get conversion rate
  useEffect(async () => {
    const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyFrom}_${currencyTo},${currencyTo}_${currencyFrom}&compact=ultra&apiKey=${apiKey}`);
    const data = await response.json();
    const results = Object.values(data)
    if (results.length > 1) {
      setCurrencyRateFrom(results[0])
      setCurrencyRateTo(results[1])
    } else {
      setCurrencyRateFrom(results[0])
      setCurrencyRateTo(results[0])
    }

  }, [currencyFrom, currencyTo])

  // Calculate To Value
  useEffect(async () => {
    setValueTo(parseFloat(valueFrom * currencyRateFrom).toFixed(2))
  }, [auxValueFrom])

  // Calculate From Value
  useEffect(async () => {
    setValueFrom(parseFloat(valueTo * currencyRateTo).toFixed(2))
  }, [auxValueTo])

  useEffect(async () => {
    setValueTo(parseFloat(valueFrom * currencyRateFrom).toFixed(2))
  }, [currencyRateFrom, currencyRateTo])

  return (
    <>
      <h1>Currency Converter</h1>
      <h2>from</h2>
      <div className="input-group">
        <InputField
          value={valueFrom}
          setValue={value => setAuxValueFrom(value)}
          setText={value => setValueFrom(value)}>
        </InputField>
        <CurrencieList
          value="BRL"
          currencies={currencies}
          setValue={value => setCurrencyFrom(value)}>
        </CurrencieList>
      </div>
      <h2>to</h2>
      <button>Swap</button>
      <div className="input-group">
        <InputField
          value={valueTo}
          setValue={value => setAuxValueTo(value)}
          setText={value => setValueTo(value)}
          >
        </InputField>
        <CurrencieList
          value="USD"
          currencies={currencies}
          setValue={value => setCurrencyTo(value)}>
        </CurrencieList>
      </div>
    </>
  )
}

export default App;


// Get Currencies
// https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58