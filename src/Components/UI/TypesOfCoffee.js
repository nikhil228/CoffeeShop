import React, { Component } from "react";
import "./Coffee.css";

import cappuccino from "../../assests/cappuccino.png";
import Americano from "../../assests/Americano.png";
import Mocca from "../../assests/Mocca.png";
import Chocolate from "../../assests/Chocolate.png";
import Machhaito from "../../assests/Machhaito.png";
import Expresso from "../../assests/Expresso.png";
import Coffee from "../../assests/Coffee.jpg";


class TypesOfCoffee extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <div className="div-1">
          <h2 className="Heading">Coffee Types</h2>
            <div className="div-sub">
              <div className="div-sub-2">
                <img className="img-1" src={cappuccino} />
                <br />
                <span className="span">Cappuccino</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Cappuccino")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Americano} />
                <br />
                <span className="span">Americano</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Americano")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Mocca} />
                <br />
                <span className="span">Mocca</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Mocca")}
                >
                  Select
                </button>
              </div>
            </div>
            <div className="div-sub">
              <div className="div-sub-2">
                <img className="img-1" src={Machhaito} />
                <br />
                <span className="span">Machhaito</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Machhaito")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Chocolate} />
                <br />
                <span className="span">Chocolate</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Chocolate")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Expresso} />
                <br />
                <span className="span">Expresso</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Expresso")}
                >
                  Select
                </button>
              </div>
            </div>
            <div className="div-sub">
              <div className="div-sub-2">
                <img className="img-1" src={Mocca} />
                <br />
                <span className="span">Cold Coffee</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Cold Coffee")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Expresso} />
                <br />
                <span className="span"> Latte</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Latte")}
                >
                  Select
                </button>
              </div>
              <div className="div-sub-2">
                <img className="img-1" src={Americano} />
                <br />
                <span className="span">Black Coffee</span>
                <br />
                <br />
                <button
                  className="button-5"
                  onClick={() => this.props.onChangeHandler("Black Coffee")}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default TypesOfCoffee;
