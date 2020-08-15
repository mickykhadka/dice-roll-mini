import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    console.log(this.props.value.firstDie);
    console.log(this.props.value.lastDie);
    return (
      <div className="Die">
        <i
          className={`fas fa-7x fa-dice-${this.props.value} ${
            this.props.rollstate && "Die-shake"
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
