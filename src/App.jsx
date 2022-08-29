import React, { useState, useEffect, Component } from "react"

class App extends Component {

  // const [currencies, setCurrencies] = useState([])

  // useEffect(() => {
  //   fetch("https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58")
  //     .then(response => response.json())
  //     .then(response => setCurrencies(response.results))
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>Currency Converter</h1>
  //     <select>
  //       {
  //         Object.keys(currencies).forEach((currency) => {
  //           <option key={currency} value={currency.id}>{currency.id}</option>
  //         }
  //         )
  //       }
  //     </select>
  //   </div >
  // )
  state = {
    currencies: []
  }

  componentDidMount() {
    this.loadCurrencies();
  }

  loadCurrencies = async () => {
    fetch("https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58")
      .then(response => response.json())
      .then(response => this.setState({ currencies: response.results }))
  }

  render() {
    const { currencies } = this.state;
    console.log(currencies)
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <select>
          {
            Object.keys(currencies).forEach((currency) => {
              <option key={currency} value={currency.id}>{currency.id}</option>
            })
          }
        </select>
      </div>
    )
  }
}

export default App;


// Get Currencies
// https://free.currconv.com/api/v7/currencies?apiKey=f4b49b3bb7b8da2dfe58