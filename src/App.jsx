import React, { useState, useEffect } from "react"
import './styles/global.css'
import CurrencieList from "./components/CurrencieList";
import InputField from "./components/InputField";

const App = () => {
  const [valueFrom, setValueFrom] = useState("100");
  const [valueTo, setValueTo] = useState("0");
  const [currencyFrom, setCurrencyFrom] = useState("BRL");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyRateFrom, setCurrencyRateFrom] = useState("");
  const [currencyRateTo, setCurrencyRateTo] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const [auxValueFrom, setAuxValueFrom] = useState("");
  const [auxValueTo, setAuxValueTo] = useState("");

  const apiKey = "c7H0cm3rEpxYFUqd6HZQ7HSoX5wlZL1xKSpZvQMg";

  // Get currency list
  useEffect(async () => {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/currencies?apikey=${apiKey}`);
    const data = await response.json();
    const results = data.data;
    data.error != undefined ? setError(data.error) : null;
    const arrCurrencies = [];
    for (var x in results) {
      arrCurrencies.push({
        name: results[x].name,
        symbol: results[x].symbol,
        code: results[x].code
      })
    }
    setCurrencies(arrCurrencies);
  }, [])

  // Get conversion rate
  useEffect(async () => {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apiKey=${apiKey}&currencies=EUR%2CCAD`);
    // const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apiKey=${apiKey}&base_currency=${currencyFrom}&currencies=${currencyTo}`);
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
          currencies={currencies}
          setValue={value => setCurrencyFrom(value)}>
        </CurrencieList>
      </div>
      <h2>to</h2>
      <div className="input-group">
        <InputField
          value={valueTo}
          setValue={value => setAuxValueTo(value)}
          setText={value => setValueTo(value)}
          >
        </InputField>
        <CurrencieList
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