import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">
              Aunty Homes
            </Link>
            <a
              href="#"
              data-activates="mobile-demo"
              className="button-collapse"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  <i className="fa fa-home" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-info-circle" /> Why Aunty Homes
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fa fa-phone-square" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <i className="fa fa-pencil-square" /> Blog
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li className="center">
                <Link to="/">
                  <i className="fa fa-home" />
                  Home
                </Link>
              </li>
              <li className="center">
                <Link to="/about">
                  <i className="fa fa-info-circle" /> Why Aunty Homes
                </Link>
              </li>
              <li className="center">
                <Link to="/contact">
                  <i className="fa fa-phone-square" />
                  Contact
                </Link>
              </li>
              <li className="center">
                <Link to="/blog">
                  <i className="fa fa-pencil-square" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
