import React, { Component } from "react";
import "./HomePage.css";

import Arrow from "../../Assets/Arrow.svg";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="HomePage">
          <p className="headerText">Wash and sell the car</p>
          <p className="headerText">The way you do it</p>

          <button className="exploreMore">
            <a href="#">Explore more</a>
            <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
