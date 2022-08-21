import React, { Component } from "react";
import "./CountScoop.css";

class CountScoop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      count: 0,
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    if (this.state.clicks > 0) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  };
  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  DecreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <h2 className="head">SCOOP-COUNT</h2>
        <div className="div-main">
          <h2>Sugar</h2>
          <div className="div-main-1">
            <button className="button-1" onClick={this.DecreaseItem}>
              -
            </button>

            <div className="div---">
              <button className="button-3">{this.state.clicks}</button>
            </div>
            <button className="button-2" onClick={this.IncrementItem}>
              +
            </button>
          </div>
          <br />
          <h2>Milk</h2>
          <div className="div-main-1">
          
            <button className="button-1" onClick={this.DecreaseCount}>
              -
            </button>
            <div className="div---">
              <button className="button-3">{this.state.count}</button>
            </div>

            <button className="button-2" onClick={this.IncrementCount}>
              +
            </button>
          </div>
        </div>
        <button
          className="button-4"
          onClick={() =>
            this.props.onCountHandler(this.state.clicks, this.state.count)
          }
        >
          SELECT
        </button>
      </div>
    );
  }
}

export default CountScoop;
