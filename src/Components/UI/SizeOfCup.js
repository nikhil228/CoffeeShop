import React, { Component } from "react";
import Coffee from "../../assests/Coffee.jpg";
import "./SizeOfCup.css";

class SizeOfCup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="div-sub-1">
          <div className="div-sub-3">
            <img className="img-" src={Coffee} />
            <h3 className="headings">Small</h3>
            <button
              className="button-"
              onClick={() => this.props.onToggleHandler("Small", Coffee)}
            >
              Select
            </button>
          </div>
          <div className="div-sub-3">
            <img className="img--" src={Coffee} />
            <h3 className="headings">Medium</h3>
            <button
              className="button--"
              onClick={() => this.props.onToggleHandler("Medium", Coffee)}
            >
              Select
            </button>
          </div>
          <div className="div-sub-3">
            <img className="img---" src={Coffee} />
            <h3 className="headings-">Large</h3>
            <button
              className="button"
              onClick={() => this.props.onToggleHandler("Large", Coffee)}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SizeOfCup;
