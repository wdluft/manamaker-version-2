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
  render() {
    return (
      <CalculatorContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CalculatorContext.Provider>
    )
  }
}
