import './App.css';
import './Coins.css';
import MainCoins from './MainCoins';

function Coins() {
  return (
    <div className="Coins">
      <header className="Coins-header">
        <h1>
        Lista de Criptomonedas
        </h1>
        <h2>
          En base a los datos de la API <a href='https://www.coingecko.com/es/api' target='_blank' rel="noreferrer">Coingecko</a>
        </h2>
      </header>
      <MainCoins></MainCoins>
    </div>
  );
}

export default Coins;