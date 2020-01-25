import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

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
        sourcesNeeded: 0,
      },
      {
        id: 2,
        color: 'blue',
        landType: 'Islands',
        pips: 0,
        sourcesNeeded: 0,
      },
      {
        id: 3,
        color: 'black',
        landType: 'Swamps',
        pips: 0,
        sourcesNeeded: 0,
      },
      {
        id: 4,
        color: 'red',
        landType: 'Mountain',
        pips: 0,
        sourcesNeeded: 0,
      },
      {
        id: 5,
        color: 'green',
        landType: 'Forests',
        pips: 0,
        sourcesNeeded: 0,
      },
    ],
  };

  handleReset = e => {
    e.preventDefault();

    this.setState({
      landsNeeded: 17,
      manaColors: [
        {
          id: 1,
          color: 'white',
          landType: 'Plains',
          pips: 0,
          sourcesNeeded: 0,
        },
        {
          id: 2,
          color: 'blue',
          landType: 'Islands',
          pips: 0,
          sourcesNeeded: 0,
        },
        {
          id: 3,
          color: 'black',
          landType: 'Swamps',
          pips: 0,
          sourcesNeeded: 0,
        },
        {
          id: 4,
          color: 'red',
          landType: 'Mountains',
          pips: 0,
          sourcesNeeded: 0,
        },
        {
          id: 5,
          color: 'green',
          landType: 'Forests',
          pips: 0,
          sourcesNeeded: 0,
        },
      ],
    });
  };

  updateLands = e => {
    const { manaColors } = this.state;

    const newColors = [...manaColors];

    const newTotalLands = e.target.value;

    console.log(newTotalLands);

    // Calculate total pips
    const totalPips = this.getTotalPips(newColors);
    console.log(`Total Pips: ${totalPips}`);

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = this.calculateSourcesNeeded(
        color.pips,
        totalPips,
        newTotalLands
      );
    });
    console.log(newColors);

    this.setState({ totalLands: newTotalLands, manaColors: newColors });
  };

  updatePips = e => {
    const { manaColors, totalLands } = this.state;
    const newColors = manaColors.map(color => {
      if (color.color === e.target.name) {
        color.pips = Number(e.target.value);
      }
      return color;
    });

    const totalPips = this.getTotalPips(newColors);

    // Calculate sourcesNeeded
    newColors.forEach(color => {
      color.sourcesNeeded = this.calculateSourcesNeeded(
        color.pips,
        totalPips,
        totalLands
      );
    });

    this.setState({
      manaColors: newColors,
    });
  };

  getTotalPips = colors => {
    const colorPips = colors.map(color => color.pips);
    return colorPips.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  calculateSourcesNeeded = (colorPips, totalPips, totalLands) =>
    totalPips === 0 ? 0 : Math.round((colorPips / totalPips) * totalLands);

  render() {
    const { children } = this.props;
    return (
      <CalculatorContext.Provider
        value={{
          ...this.state,
          handleReset: this.handleReset,
          updateLands: this.updateLands,
          updatePips: this.updatePips,
        }}
      >
        {children}
      </CalculatorContext.Provider>
    );
  }
}

CalculatorContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
