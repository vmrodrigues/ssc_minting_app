import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <header className="header" id="header">
        <div className="container">
          <div className="header__inner"></div>
        </div>
      </header>
      <div className="menu__wrapper">
        <div className="container">
          <ul className="menu">
            <li className="menu__item">
              <a
                href="https://superstarclub.io#coll"
                className="menu__link"
                data-smooth="smooth"
              >
                THE COLLECTION
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://superstarclub.io#util"
                className="menu__link"
                data-smooth="smooth"
              >
                UTILITIES
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://superstarclub.io#map"
                className="menu__link"
                data-smooth="smooth"
              >
                ROAD MAP
              </a>
            </li>
            <li className="menu__item">
              <a
                href="https://superstarclub.io#team"
                className="menu__link"
                data-smooth="smooth"
              >
                THE TEAM
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link" data-smooth="smooth">
                MINTING
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
