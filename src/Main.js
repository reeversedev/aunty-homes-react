import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import girlPg from "./images/aunty-homes-girls-pg.jpg";
import girlsPg1 from "./images/girls-pg-1.jpg";
import girlsPg2 from "./images/girls-pg-2.jpg";
import girlsPg3 from "./images/girls-pg-3.jpg";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Aunty Homes Girls PG in Kaushambi near Metro Station.</title>
          {/* <!-- Meta Tags --> */}
          <meta
            name="title"
            content="Aunty Homes Girls PG/Paying Guest House"
          />
          <meta
            name="description"
            content="Aunty Homes Girls PG is a PG for girls, females, ladies and women. Aunty Homes Girls PG has all the urban facilities like Washing Machine, Television, High Speed Internet and WiFi. Aunty Homes Girls PG has AC and Cooler rooms availabe at very cheap rates. Rooms betwee 6500 - 9000 are available in Kaushambi Metro Station. Aunty Homes Girls PG is very near to Kaushambi Metro Station, Ansal Plaza and Yashoda Hospital."
          />
          <meta
            name="keywords"
            content="paying guest, girls pg, pg for girls, pg for girls near noida sector 62, pg for girls near noida sector 63, pg with wifi, pg with food, best pg in kaushambi, best girls pg in kaushambi, best pg in vaishali, best girls pg in vaishali, pg with good facilities, facilities, pg with internet, pg with washing machine, ac rooms, cooler rooms, hygenic food, pg near metro station, pg near kaushambi metro station, pg near vaishali metro station, pg near EDM, pg near Pacific Mall, pg near Cannought Place, pg near karkarduma, pg near karkardooma, pg in lakshmi nagar, pg in preet vihar, pg in laxmi nagar"
          />
          {/* <!-- Material Icons --> */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* <!--Import materialize.css--> */}
          {/* <!-- Compiled and minified CSS --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
          />
          <link rel="stylesheet" href="stylesheets/style.css" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Acme|Bree+Serif|Lobster|Pacifico"
            rel="stylesheet"
          />
        </Helmet>

        <Header />
        <div className="container">
          <div className="center">
            <h3>Looking for a Girls PG in Kaushambi?</h3>
            <img src={girlPg} alt="best_paying_Guest_House" />
            <p className="flow-text">
              "My work location is in Ghaziabad or should I just say near
              Kaushambi or Vaishali or Noida 60's. But I am unable to find a
              decent living place that can provide me with urban facilities in
              my budget. Oh God! Where am I going to find such place near my
              work location?" - A Female
            </p>
          </div>
          <hr />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col l6">
              <h3>Near by Metro Station</h3>
              <p className="flow-text">
                Aunty Homes Girls PG is very suitable with travel and transit.
                We are situated near to <a>Kaushambi Metro station</a>. Yes,
                just a 5 minutes walk away.
              </p>
            </div>
            <div className="col l6 s12">
              <div id="map" />
            </div>
          </div>
        </div>

        <div className="container-fluid" id="facilities">
          <div className="col l6 s12 hide-on-large-only">
            <div className="container">
              <h3 className="facilities">Facilities</h3>
              <p className="flow-text">
                Rooms are available with AC/Cooler depending on the requirement.
                At Aunty Homes Girls PG, is providing every basic requirement
                and improve on doing it so that you can have a feeling of home
                away from home.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col l6 s12 center" id="icons">
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">wifi</i>
                <span className="col l12 s12 blue-icon">
                  High Speed Internet
                </span>
              </div>
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">live_tv</i>
                <span className="col l12 s12 blue-icon">Television</span>
              </div>
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">
                  local_laundry_service
                </i>
                <span className="col l12 s12 blue-icon">Washing Machine</span>
              </div>
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">local_parking</i>
                <span className="col l12 s12 blue-icon">
                  Ample Parking Space
                </span>
              </div>
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">flash_on</i>
                <span className="col l12 s12 blue-icon">Power Backup</span>
              </div>
              <div className="col l4 s6 facility-icon">
                <i className="large material-icons blue-icon">restaurant</i>
                <span className="col l12 s12 blue-icon">Hygienic Food</span>
              </div>
            </div>
            <div className="col l6 s12 hide-on-med-and-down">
              <h3 className="center">Facilities</h3>
              <p className="flow-text">
                Rooms are available with AC/Cooler depending on the requirement.
                At Aunty Homes Girls PG, is providing every basic requirement
                and improve on doing it so that you can have a feeling of home
                away from home.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="center">See what our customers say..</h3>
          <div className="row">
            <div className="col l4 m4">
              <div className="row">
                <div className="col l12">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={girlsPg1}
                        alt="Girls_PG_in_Kaushambi_and_Delhi"
                      />{" "}
                    </div>
                    <div className="card-content">
                      <p>
                        The best about this pg is the homely atmosphere and the
                        home cooked food that all the students crave about. The
                        owner is very friendly and caring. Moreover, it is very
                        close to metro station.
                      </p>
                    </div>
                    <div className="card-action">
                      <a>-- Student</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 m4">
              <div className="row">
                <div className="col l12">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={girlsPg3}
                        alt="Girls_Paying_Guest_House_in_Kaushambi"
                      />
                    </div>
                    <div className="card-content">
                      <p>
                        It's really close to metro and hygienic. The owner is
                        kind and helpful. Moreover delicious home cooked food is
                        served. The pg is suitable for students as well as
                        working professionals.
                      </p>
                    </div>
                    <div className="card-action">
                      <a className="center">-- Software Engineer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l4 m4">
              <div className="row">
                <div className="col l12">
                  <div className="card">
                    <div className="card-image">
                      <img src={girlsPg2} alt="Girls_PG_near_Ansal_Plaza" />
                    </div>
                    <div className="card-content">
                      <p>
                        Based on a pleasant locality and easy to commute. Also
                        the PG has a specious rooms and a kind hearted owners.
                        It's very safe, and a hygiene place to live with a
                        friendly atmosphere.
                      </p>
                    </div>
                    <div className="card-action">
                      <a>-- HR Professional</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
