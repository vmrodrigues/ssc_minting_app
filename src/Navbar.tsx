import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
    <header className="header" id="header">
            <div className="container">
            <div className="header__inner">
              <a href="/" className="logo">
                <img src="img/logo.png" alt=""/>
              </a>
            </div>
            </div>
            </header>
            <div className="menu__wrapper">
          <div className="container">
            <ul className="menu">
              <li className="menu__item">
                <a href="#coll" className="menu__link" data-smooth="smooth">
                  THE COLLECTION
                </a>
              </li>
              <li className="menu__item">
                <a href="#util" className="menu__link" data-smooth="smooth">
                  UTILITIES
                </a>
              </li>
              <li className="menu__item">
                <a href="#map" className="menu__link" data-smooth="smooth">
                  ROAD MAP
                </a>
              </li>
              <li className="menu__item">
                <a href="#team" className="menu__link" data-smooth="smooth">
                  THE TEAM
                </a>
              </li>
              <li className="menu__item">
                <a href="minting.html" className="menu__link" data-smooth="smooth">
                  MINTING
                </a>
              </li>
            </ul>
          </div>
        </div>
    </React.Fragment>
  );
}

export default Navbar;