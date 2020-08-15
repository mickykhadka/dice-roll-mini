import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDie: "one",
      lastDie: "one",
      rolling: false,
    };
    this.setRandomValue = this.setRandomValue.bind(this);
  }
  getRandomDiceValue = () => Math.floor(Math.random() * 6) + 1;
  getStringEqv = (num) => {
    switch (num) {
      case 2:
        return "two";
      case 3:
        return "three";
      case 4:
        return "four";
      case 5:
        return "five";
      case 6:
        return "six";
      default:
        return "one";
    }
  };

  setRandomValue() {
    const rand1 = this.getRandomDiceValue();
    const rand2 = this.getRandomDiceValue();
    this.setState({
      firstDie: this.getStringEqv(rand1),
      lastDie: this.getStringEqv(rand2),
      rolling: true,
    });
    setTimeout(
      () =>
        this.setState({
          rolling: false,
        }),
      1000
    );
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-die">
          <Die value={this.state.firstDie} rollstate={this.state.rolling} />
          <Die value={this.state.lastDie} rollstate={this.state.rolling} />
        </div>
        <button onClick={this.setRandomValue} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Now!!!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
