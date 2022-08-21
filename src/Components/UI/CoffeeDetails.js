import React, { Component } from "react";
import "./CountScoop.css";
import TypesOfCoffee from "./TypesOfCoffee.js";
import "./CoffeeDetails.css";

class CoffeeDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-div">
        <div>
          <h1 className="heading-1">{this.props.coffeeDetails.coffeeName}</h1>
        </div>
        <div>
          <img src={this.props.coffeeDetails.coffeeImage} width="50%" />
          <br />
          <span className="span-1">{this.props.coffeeDetails.mugSize}</span>
        </div>
        <div>
          <h3 className="heading-2">Sugar Scoop</h3>
          <p className="p">{this.props.coffeeDetails.sugarCount}</p>
        </div>
        <div>
          <h3 className="heading-2">Milk Scoop</h3>
          <p className="p">{this.props.coffeeDetails.milkCount}</p>
        </div>
      </div>
    );
  }
}

export default CoffeeDetails;
