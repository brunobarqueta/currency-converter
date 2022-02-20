import { Field } from "./components/Field"
import { SelectCurrencies } from "./components/SelectCurrencies"
import React, { useState } from "react"
import Axios from "axios"

function App() {
  
  return (
    <div>
      <h1>Currency Converter</h1>
      <Field />
      <SelectCurrencies />
    </div>
  )
}


export default App

// Get Currencies
// https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58