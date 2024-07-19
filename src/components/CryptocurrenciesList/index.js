import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="uds-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <P className="list-coin-value-heading">EURO</P>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrrency-img"
          src="https://assets.ccbp.in/frontend/react-js.cryptocurrrency-bg.png"
          alt="cryptocurrrency"
        />
      </div>
    )
  }
}

export default CryptocurrenciesList
