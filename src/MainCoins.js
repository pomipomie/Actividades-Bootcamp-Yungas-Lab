import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import './Coins.css';

function MainCoins() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';
    const [coin, setCoins] = useState();
    const getCoins = async () => {
        try {
            const myCoins = await axios.get(url);
            setCoins(myCoins.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCoins();
      }, []);
    return (
        <section className="cointainer">
            <dl>
            {!coin ? 'Cargando' :
                coin.map((coin, index) => {
                    return (
                        <div key={'D'+coin.id+index} className="item">
                            <dt key={'N'+coin.id+index}>Nombre: <span className="title">{coin.name}</span></dt>
                            <dd key={coin.id+index}>
                                <ul>
                                    <li key={'S'+coin.id+index}>Símbolo: <span className="title">{coin.symbol}</span></li>
                                    <li key={'P'+coin.id+index}>Precio: <span className="title">{coin.current_price}</span></li>
                                    <li key={'R'+coin.id+index}>Ranking de Capitalización de Mercado: <span className="title">{coin.market_cap_rank}</span></li>
                                    <li key={'C'+coin.id+index}> Capital de Mercado: <span className="title">{coin.market_cap_change_percentage_24h}</span></li>
                                </ul>
                                <p className="pic" key={'I'+coin.id+index}><img alt='Logo de la criptomoneda' src={coin.image} /></p>    
                            </dd>
                        </div>
                    )
                })
                }
            </dl>
        </section>
    )
}

export default MainCoins;