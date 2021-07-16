/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="company-name-logo">
                <button className="list"><i className="bi bi-list"></i></button>
                <i className="bi bi-currency-bitcoin"></i>
                <span>CryptoGeek</span>
            </div>
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/documentation">Documentation</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <ul className="social-media">
                <li><a href="https://www.github.com/"><i className="bi bi-github"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                <li><a href="https://www.twitter.com/"><i className="bi bi-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></li>
            </ul>
            <div className="signup-login">
                <div className="sign-up">SignUp</div>
                <div className="login">Login</div>
            </div>
        </nav>
    );
}

export default Navbar;