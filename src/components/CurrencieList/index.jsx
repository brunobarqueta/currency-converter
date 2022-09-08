import react, { useState, useEffect } from "react"
import './CurrencieList.css'

const CurrencieList = (props) => {

    const [currencies, setCurrencies] = useState([]);
    const [currencieText, setCurrencieText] = useState("");
    
    useEffect(async () => {
        const response = await fetch("https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58");
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
    }, [])

    const handleSelectChange = (event) => {
        setCurrencieText(event.target.value);
    }

    return (
        <div className="currencies">
            <select name="selectCurrencies" id="selectCurrencies" onChange={handleSelectChange}>
                {
                    currencies.map((currency) => (
                        <option key={currency.id} value={currency.currencyName}>{currency.id}</option>
                    ))
                }
            </select>
            <input value={currencieText} readOnly/>
        </div>
    )
}

export default CurrencieList


    // componentDidMount() {

    // }
    // const [currencies, setCurrencies] = useState([
    // //     {
    // //         id: "BRL",
    // //         currencySymbol: "R$",
    // //         currencyName: "Real"
    // //     },
    // //     {
    // //         id: "USD",
    // //         currencySymbol: "$",
    // //         currencyName: "Dolar"
    // //     }
    // ])


    


    // return (
    //     <select>
    //         {
    //             currencies.map((currency) => (
    //                 <option key={currency} value={currency.id}>{currency.currencySymbol}: {currency.currencyName}: {currency.id}</option>
    //             ))
    //         }
    //     </select>
    // )
