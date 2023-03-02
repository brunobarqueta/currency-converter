// import './CurrencieList.css'
import { useEffect } from 'react'


const CurrencieList = (props) => {
    const currencies = props.currencies;

    const changeCurrency = (value) => {
        props.setValue(event.target[event.target.selectedIndex].value)
    }

    useEffect(() => {
        props.setValue(props.value)
    }, [])

    return (
        // <div className="currencies">
        //     <select name="selectCurrencies" id="selectCurrencies" value={props.value} onChange={changeCurrency}>
        //         {
        //             currencies.map((currency) => (
        //                 <option key={currency.symbol} defaultValue={currency.symbol == props.a} value={currency.code}>{currency.symbol} - {currency.name}</option>
        //             ))
        //         }
        //     </select>
        // </div>

        <div className="inline-block relative w-64 mx-4">
            <select
                name="selectCurrencies"
                id="selectCurrencies"
                value={props.value}
                onChange={changeCurrency}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {
                    currencies.map((currency) => (
                        <option key={currency.symbol} defaultValue={currency.symbol == props.a} value={currency.code}>{currency.symbol} - {currency.name}</option>
                    ))
                }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mb-4">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>


    )
}

export default CurrencieList
