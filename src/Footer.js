import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Aunty Homes Girls PG</h5>
                <p className="grey-text text-lighten-4">
                  Aunty Homes Girls PG is situated near Kaushambi Metro Station.
                  The paying guest house for girls which focuses on top notch
                  services.
                </p>
                <p className="grey-text text-lighten-4">
                  Contact Number:
                  <a href="tel:+919643136834">9643136834</a>
                </p>
                <p className="grey-text text-lighten-4">
                  Address:
                  <a>D-42, Kaushambi, Ghaziabad</a>
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Aunty Homes Girls PG
              <a
                className="grey-text text-lighten-4 right"
                href="https://github.com/reeversedev"
                target="_blank"
              >
                With
                <i className="tiny material-icons">favorite_border</i> by
                <span className="username">@reeversedev</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
