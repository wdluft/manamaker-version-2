import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => (
  <AboutWrapper
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ damping: 300, duration: 0.5 }}
  >
    <h3>About ManaMaker</h3>
    <p>
      A simple calculator to help figure out how many basic lands of each color
      to run in your deck. Made primarily with limited in mind.
    </p>
    <p>Version 2.1</p>
  </AboutWrapper>
);

export default About;

const AboutWrapper = styled(motion.section)`
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
