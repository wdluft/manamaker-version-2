import styled from 'styled-components';

export const CalculatorWrapper = styled.section`
  padding: 0 1rem;
  width: 100%;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const ManaInputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  align-items: center;

  .green {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ManaInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: end;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--black);

  .manaGroup__sources {
    color: var(--white);
    padding-bottom: 5px;
  }
`;
