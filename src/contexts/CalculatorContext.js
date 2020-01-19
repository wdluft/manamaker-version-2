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
  render() {
    return (
      <CalculatorContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
}
