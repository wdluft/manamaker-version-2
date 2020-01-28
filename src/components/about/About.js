import React from 'react';
import styled from 'styled-components';

const About = () => (
  <StyledAbout>
    <h1>About ManaMaker</h1>
    <p>
      A simple calculator to help figure out how many basic lands of each color
      to run in your deck. Made primarily with limited in mind.
    </p>
    <p>Version 2.0</p>
  </StyledAbout>
);

export default About;

const StyledAbout = styled.section`
  height: 100%;
  margin: 100px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 75px;
  }
`;
