/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import './card.css';

function Card({ logo_url, id, name, price, circulating_supply, max_supply, market_cap, price_change }) {
    return (
        <div className="card">
            <img src={logo_url} alt="" />
            <h2>{id}</h2>
            <h4>{name}</h4>
            <h2>{price}</h2>
            <div className="extra-data">
                <div>Circulating Supply: {circulating_supply}</div>
                <div>Max Supply: {max_supply}</div>
                <div>Market Cap: {market_cap}</div>
                {/* <div>Price Change: {price_change}</div> */}
            </div>
        </div>
    );
}

export default Card;