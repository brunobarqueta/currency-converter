import react, { useState, useEffect } from "react"
import './CurrencieList.css'

const CurrencieList = (props) => {
    const currencies = props.currencies;

    const changeCurrency = (event) => {
        props.setValue(event.target[event.target.selectedIndex].value)
    }
    
    return (
        <div className="currencies">
            <select name="selectCurrencies" id="selectCurrencies" onChange={changeCurrency}>
                {
                    currencies.map((currency) => (
                        <option key={currency.id} value={currency.id}>{currency.id} - {currency.currencyName}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CurrencieList
