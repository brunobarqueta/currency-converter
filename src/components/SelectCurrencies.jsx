import react, {setState} from "react"

export function SelectCurrencies() {
    const currencies = [
        // {
        //     id: "BRL",
        //     currencySymbol: "R$",
        //     currencyName: "Real"
        // },
        // {
        //     id: "USD",
        //     currencySymbol: "$",
        //     currencyName: "Dolar"
        // }
    ]

    fetch("https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58").then(
        (response) => response.json()
    ).then((data) => {
        var a = data.results
        for (var x in a) {
            currencies.push({
                currencyName: a[x].currencyName,
                id: a[x].id,
                currencySymbol: a[x].currencySymbol
            })
        }
        console.log(currencies)
        setState()
    })

    return (
        <select>
            {currencies.map((currency) => (
                <option value={currency.id}>{currency.currencySymbol}: {currency.currencyName}: {currency.id}</option>
            ))}
        </select>
    )
}