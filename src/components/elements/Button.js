import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  padding: 0.25rem 2.5rem;
  border-radius: 23px;
  font-size: var(--bodyText);
  background: var(--purple);
  color: var(--white);
  border: 3px solid var(--black);

  &:hover {
    background: var(--lightPurp);
  }

  &:active {
    background: var(--darkPurp);
  }

  &:focus {
    border-color: var(--green);
    outline: none;
  }

  @media (min-width: 640px) {
    font-size: var(--heading5);
  }
`;
