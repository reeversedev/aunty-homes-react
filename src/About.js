import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>Aunty Homes Girls PG</h3>
          <div>
            <p className="flow-text">
              Aunty Homes Girls PG is Paying Guest House for Girls. We are
              situated in Kaushambi near urban landmarks like Pacific Mall -
              Kaushambi, EDM (East Delhi Mall), Kaushambi Metro Station, Ansal
              Plaza, Mahagun Metro Mall and much more.
            </p>
            <div className="row">
              <div className="col m6">
                <p className="flow-text">
                  Our vision is to provide peaceful and healthy living
                  environment for working women and students in best budget
                  possible.
                </p>
              </div>
              <div className="col m6">
                <div className="col m12 offset-m2">
                  <i id="icon-money" className="fa fa-money col m12" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m6">
              <i id="icon-university" className="fa fa-university center" />
            </div>
            <div className="col m6">
              <p className="flow-text">
                Our Existing and past customers are mostly students from SRM
                University, KIET (Krishna Institute of Engineering and
                Technology), IPEC, Delhi University and IP University.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col m6">
              <p className="flow-text">
                Working Professionals who commute daily to Noida Sector 62, 63,
                64 and 65,Connaught Place, Preet Vihar, Karkarduma find it much
                more easier and comfortable to look for a PG in Kaushambi and
                Aunty Homes Girls PG is a right choice by them.
              </p>
              <p className="flow-text">
                We are just 5 minutes walk away from Kaushambi Metro Station and
                7 minutes drive from Vaishali Metro Station.
              </p>
            </div>
            <div className="col m6">
              <div className="col m12 offset-m2">
                <i id="icon-subway" className="fa fa-subway center" />
              </div>
            </div>
          </div>
          <div className="row">
            <p className="flow-text">
              For booking/enquiries, Please call{" "}
              <a href="tel:+919643136834">9643136834</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
