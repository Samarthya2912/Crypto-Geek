/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Card from './card';
import reportWebVitals from './reportWebVitals';

// const data = { "id": "BTC", "currency": "BTC", "symbol": "BTC", "name": "Bitcoin", "logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg", "status": "active", "price": "31490.57059003", "price_date": "2021-07-16T00:00:00Z", "price_timestamp": "2021-07-16T09:27:00Z", "circulating_supply": "18757818", "max_supply": "21000000", "market_cap": "590694391844", "market_cap_dominance": "0.4124", "num_exchanges": "385", "num_pairs": "60839", "num_pairs_unmapped": "5202", "first_candle": "2011-08-18T00:00:00Z", "first_trade": "2011-08-18T00:00:00Z", "first_order_book": "2017-01-06T00:00:00Z", "rank": "1", "high": "63506.60284712", "high_timestamp": "2021-04-13T00:00:00Z", "1h": { "volume": "1038800489.63", "price_change": "-193.61936887", "price_change_pct": "-0.0061", "volume_change": "42973472.74", "volume_change_pct": "0.0432", "market_cap_change": "-3631496672.27", "market_cap_change_pct": "-0.0061" } }

function Cardsdiv() {
  const [data_arr, setData] = useState([]);

  async function f() {
    let url = "https://api.nomics.com/v1/currencies/ticker?key=0acbab5b4b204709cb9b7194584a5c938a971509&ids=BTC,ETH,HEX,LTC,ADA,DOT,BCH,XLM,BNB,USDT,XMR,XRP&interval=1h&convert=USD&per-page=100&page=1";

    let response = await fetch(url);
    let data_arr = await response.json();
    console.log(data_arr);
    setData(data_arr);
  }

  useEffect(() => {
    f();
  }, [])

  return (
    <div className="cards-div">
      {data_arr.map(data => {
        return <Card key={data.id} {...data} />
      })}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Cardsdiv />
  </React.StrictMode>,
  document.getElementById('root')
);

const list_btn = document.querySelector('.list');
const links = document.querySelector('.links');
const social_media = document.querySelector('.social-media');
const signup_login = document.querySelector('.signup-login');

const elems = [links, social_media, signup_login];

list_btn.addEventListener('click', () => {
  elems.forEach(elem => {
    elem.classList.toggle('visible');
  })
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

