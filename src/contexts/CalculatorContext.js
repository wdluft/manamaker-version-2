import React, { createContext, Component } from 'react';

export const CalculatorContext = createContext();

export default class CalculatorContextProvider extends Component {
  state = {
    totalLands: 17,
    manaColors: [
      {
        id: 1,
        color: 'white',
        landType: 'Plains',
        pips: 1,
        sourcesNeeded: 1
      },
      {
        id: 2,
        color: 'blue',
        landType: 'Islands',
        pips: 2,
        sourcesNeeded: 2
      },
      {
        id: 3,
        color: 'black',
        landType: 'Swamps',
        pips: 3,
        sourcesNeeded: 3
      },
      {
        id: 4,
        color: 'red',
        landType: 'Mountain',
        pips: 4,
        sourcesNeeded: 4
      },
      {
        id: 5,
        color: 'green',
        landType: 'Forests',
        pips: 5,
        sourcesNeeded: 5
      },
    ]
  }

  handleReset = (e) => {
    e.preventDefault();

    console.log(this.state.manaColors);
    this.getTotalPips(this.state.manaColors)

    this.setState({
      landsNeeded: 17,
      manaColors: [
        {
          id: 1,
          color: 'white',
          landType: 'Plains',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 2,
          color: 'blue',
          landType: 'Islands',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 3,
          color: 'black',
          landType: 'Swamps',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 4,
          color: 'red',
          landType: 'Mountains',
          pips: 0,
          sourcesNeeded: 0
        },
        {
          id: 5,
          color: 'green',
          landType: 'Forests',
          pips: 0,
          sourcesNeeded: 0
        }
      ]
    });
  }

  updateLands = e => {
    let newColors = [...this.state.manaColors];

    // Calculate total pips
    let totalPips = 0;
    newColors.forEach(color => {
      totalPips += Number(color.pips);
    });

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = Math.round(
        (color.pips / totalPips) * e.target.value
      );
    });

    this.setState({ totalLands: e.target.value, manaColors: newColors });
  };

  getTotalPips = (colors) => {
    const colorPips = colors.map(color => color.pips)
    const total = colorPips.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
  }

  render() {
    return (
      <CalculatorContext.Provider value={{ ...this.state, handleReset: this.handleReset }}>
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
}
