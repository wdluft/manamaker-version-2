import React from 'react';
import styled from 'styled-components';

const About = () => (
  <StyledAbout>
    <h3>About ManaMaker</h3>
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
  max-width: 768px;
  margin: 100px 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 75px;
  }
`;
