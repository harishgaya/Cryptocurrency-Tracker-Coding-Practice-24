// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencies()
  }

  setCryptoCurrencies = (fetchedData, loadingStatus) => {
    this.setState({
      cryptoCurrenciesData: fetchedData.map(eachCryptoCurrency => ({
        id: eachCryptoCurrency.id,
        currencyLogoUrl: eachCryptoCurrency.currency_logo,
        currencyName: eachCryptoCurrency.currency_name,
        usdValue: eachCryptoCurrency.usd_value,
        euroValue: eachCryptoCurrency.euro_value,
      })),
      isLoading: loadingStatus,
    })
  }

  getCryptoCurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    this.setCryptoCurrencies(fetchedData, false)
  }
  render() {
    const {cryptoCurrenciesData, isLoading} = this.state
    return (
      <div className="bg-Container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              testid="loader"
              type="Rings"
              color="#ffffff"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
