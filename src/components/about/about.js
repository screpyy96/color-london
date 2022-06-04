import styled from 'styled-components';
import painters from '../../assets/painters.jpg';

export const Styledtext = styled.div`
  font-size: 1.3rem;
  /* color: #fff; */
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #eece1a;

  @media (max-width: 500px) {
    font-size: 1rem;
    margin-top: 1rem;
    border-bottom: 2px solid #eece1a;
    /* border-radius: 6px; */
  }
`;
export const TextWrapper = styled.div`
  /* font-size: 1.3rem;
  /* color: #fff; */
  text-align: center;
  margin-top: 2rem; */

  /* @media (max-width: 500px) {
    font-size: 1rem;
    margin-top: 1rem;
    border-bottom: 2px solid #eece1a;
  } */
`;

export const StyledContainer = styled.div`
  background-color: #f5f5f5;
  padding: 3rem;
  min-height: 87.5vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;

export const StyledBox = styled.div`
  height: 100%;
  /* width: 100%; */
  background-color: #f5f5f5;
`;

export const StyledImage = styled.div`
  /* border: 2px solid black; */
  background-image: url(${painters});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  /* filter: opacity(0.9); */
  @media (max-width: 500px) {
    background-position: center;
    background-size: cover;
    /* grid-template-columns: 1fr; */
    height: 500px;
  }
`;
