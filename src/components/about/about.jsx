import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import about from '../../data/about.json';
import { StyledBox, StyledContainer, StyledImage, Styledtext } from './about';

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(about);
  }, [data]);
  return (
    <StyledContainer>
      <StyledBox>
        {data.map((item) => (
          <div key={item.id}>
            <Styledtext>{item.description}</Styledtext>
          </div>
        ))}
      </StyledBox>
      <StyledImage></StyledImage>
    </StyledContainer>
  );
};

export default About;
