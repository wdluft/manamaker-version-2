import styled from 'styled-components';

export const CalculatorWrapper = styled.section`
  max-width: 768px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 95px;

  button {
    grid-column: 1/3;
  }
`;

export const LandsNeededWrapper = styled.div`
  grid-column: 1/3;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ManaInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ManaInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LandTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;
