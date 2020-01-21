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
        landType: 'Mountain',
        pips: 0,
        sourcesNeeded: 0
      },
      {
        id: 5,
        color: 'green',
        landType: 'Forests',
        pips: 0,
        sourcesNeeded: 0
      },
    ]
  }

  handleReset = (e) => {
    e.preventDefault();

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

    const newTotalLands = e.target.value;

    // Calculate total pips
    const totalPips = this.getTotalPips(newColors);

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = this.calculateSourcesNeeded(color.pips, totalPips, newTotalLands)
    });

    this.setState({ totalLands: newTotalLands, manaColors: newColors });
  };

  updatePips = e => {
    let newColors = this.state.manaColors.map(color => {
      if (color.color === e.target.name) {
        color.pips = Number(e.target.value);
      }
      return color;
    });

    const totalPips = this.getTotalPips(newColors);

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = this.calculateSourcesNeeded(color.pips, totalPips, this.state.totalLands)
    });

    this.setState({
      manaColors: newColors
    })
  }

  getTotalPips = (colors) => {
    const colorPips = colors.map(color => color.pips)
    return colorPips.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
  }

  calculateSourcesNeeded = (colorPips, totalPips, totalLands) => {
    return Math.floor((colorPips / totalPips) * totalLands)
  }

  render() {
    return (
      <CalculatorContext.Provider value={{ ...this.state, handleReset: this.handleReset, updateLands: this.updateLands, updatePips: this.updatePips }}>
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
}
