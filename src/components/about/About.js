import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <StyledAbout>
      <h1>About ManaMaker</h1>
      <p>A simple calculator to help figure out how many basic lands of each color to run in your deck. Made primarily with limited in mind.</p>
      <p>Version 2.0</p>
    </StyledAbout>
  )
}

export default About;

const StyledAbout = styled.section`
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;