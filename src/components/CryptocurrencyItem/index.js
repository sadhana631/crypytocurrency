import './index.css'

const CryptocurrencytItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptocurrencyDetails

  return (
    <li className="cryptocurrency-items">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencytItem
