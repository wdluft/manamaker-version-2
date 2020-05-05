import styled from 'styled-components';

export const CalculatorWrapper = styled.section`
  padding: 0 1rem 1rem;
  width: 100%;
  max-width: 768px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 640px) {
    .landsNeeded {
      grid-gap: 2rem;
    }
    .landsNeeded__label {
      justify-self: end;
    }

    .landsNeeded__input {
      justify-self: start;
    }
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
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

  @media (min-width: 640px) {
    grid-gap: 1rem;
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

  @media (min-width: 640px) {
    padding-bottom: 1rem;

    .manaGroup__sources {
      font-size: var(--heading5);
    }
  }
`;
