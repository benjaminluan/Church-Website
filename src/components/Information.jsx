import React from "react";
import "./Information.css";
import Map from "./Map";
const Information = () => {
  return (
    <div className="home__information">
      <div className="schedule--container">
        <h2 className="schedule__header--main">Mass Schedule</h2>
        <div className="schedule__list">
          <div className="schedule">
            <h4 className="schedule__header">Saturday Mass Times</h4>
            <div className="schedule__para--container">
              <p className="schedule__para">5:30pm - New Church</p>
            </div>
          </div>
          <div className="schedule">
            <h4 className="schedule__header">Sunday Mass Times</h4>
            <div className="schedule__para--container">
              <p className="schedule__para">7:30am - New Church</p>
              <p className="schedule__para">9:30am - New Church</p>
              <p className="schedule__para">11:30am - New Church</p>
              <p className="schedule__para">1:30am - New Church</p>
            </div>
          </div>
          <div className="schedule">
            <h4 className="schedule__header">Thursday-Friday Mass Times</h4>
            <div className="schedule__para--container">
              <p className="schedule__para">7:00pm - New Church</p>
            </div>
          </div>
          <div className="schedule">
            <h4 className="schedule__header">Weekly Live Stream Times</h4>
            <div className="schedule__para--container">
              <p className="schedule__para">Monday - Saturday: 8:00am</p>
              <p className="schedule__para">Sunday: 9:30am and 11:30am</p>
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="location__left--container">
          <h2 className="location__header">Location</h2>
          <div className="location__address--container">
            <p className="location__address">Norcross, GA 30093</p>
            <p className="location__address">4545 Timmers Way</p>
            <a href="/" className="location__direction">Get Directions <span>→</span></a>
          </div>
        </div>
        <div className="map__container">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Information;
