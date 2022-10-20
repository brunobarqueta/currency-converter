import { useEffect } from "react"
import './CurrencieList.css'

const CurrencieList = (props) => {
    const currencies = props.currencies;

    const changeCurrency = (event) => {
        props.setValue(event.target[event.target.selectedIndex].value)
    }
    
    useEffect(() => {
        props.setValue(props.value)
    }, [])

    return (
        <div className="currencies">
            <select name="selectCurrencies" id="selectCurrencies" value={props.value} onChange={changeCurrency}>
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
