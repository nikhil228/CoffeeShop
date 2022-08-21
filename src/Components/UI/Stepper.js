import React, { Component } from "react";
import "./Coffee.css";
import TypesOfCoffee from "./TypesOfCoffee.js";
import SizeOfCup from "./SizeOfCup";
import CountScoop from "./CountScoop";
import CoffeeDetails from "./CoffeeDetails";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { render } from '@testing-library/react';

const steps = ['Select Type Of Coffee', 'Select An Cup Size', 'Select Scoop Count', 'Coffee Details'];

class HorizontalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.ChildFunc = this.ChildFunc.bind(this);
    this.ToggleFunc = this.ToggleFunc.bind(this);
    this.CountFunc = this.CountFunc.bind(this);
    this.state = {
      isLoggedIn: true,
      isToggle: true,
      isCount: true,
      activeStep: 0,
      coffeeDetails: {
        coffeeName: null,
        coffeeImage: null,
        mugSize: null,
        coffeeCount: null,
        sugarCount: null,
      },
    };
  }

  ChildFunc(name) {
    this.setState({
      ...this.state, isLoggedIn: false,activeStep: 1,
      coffeeDetails: {
        ...this.state.coffeeDetails,
        coffeeName: name,
      },
    });
  }

  ToggleFunc(size, image) {
    this.setState({
      ...this.state, isToggle: false,activeStep: 2,
      coffeeDetails: { ...this.state.coffeeDetails, coffeeImage: image, mugSize: size},
    });
  }
  CountFunc(clicks, count ) {
    this.setState({
      ...this.state,
      isCount: false,
      activeStep: 3,
      coffeeDetails: { ...this.state.coffeeDetails,  sugarCount: clicks,
        milkCount: count,},
    });
  }
render(){
  const isLoggedIn = this.state.isLoggedIn;
  const isToggle = this.state.isToggle;
  const isCount = this.state.isCount;
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={this.state.activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {isLoggedIn ? (
          <TypesOfCoffee onChangeHandler={this.ChildFunc} />
        ) : isToggle ? (
          <SizeOfCup onToggleHandler={this.ToggleFunc} />
        ) : isCount ? (
          <CountScoop onCountHandler={this.CountFunc} />
        ) : (
          <CoffeeDetails coffeeDetails={this.state.coffeeDetails} />
        )}
    </Box>
  );
}
  
}

export default HorizontalLinearStepper;
