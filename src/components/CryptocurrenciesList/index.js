// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  render() {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="Crypto-List-Container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="Crypto-Item-Container">
          {this.renderCryptoCurrenciesHeader()}
          <ul className="list-body">
            {cryptoCurrenciesData.map(eachCryptoCurrencyData => (
              <CryptocurrencyItem
                key={eachCryptoCurrencyData.id}
                cryptoCurrencyData={eachCryptoCurrencyData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
