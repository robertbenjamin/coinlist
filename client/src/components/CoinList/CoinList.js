import React from 'react';
import './CoinList.css';

const CoinList = props => {
  const coins = props.coins.map(coin => {
    return <div key={coin.id} className="coin">{coin.name} | {coin.symbol}</div>
  });

  return <section className="coin-list">{coins}</section>;
};

export default CoinList;
