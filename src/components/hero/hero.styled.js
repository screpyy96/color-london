import styled from 'styled-components';
// import hero from '../../assets/hero.png';
import painters from '../../assets/painters.jpg';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from '@reach/router';

export const ImgBtn = styled(Link)`
  color: #eece1a;
  text-decoration: none;

  font-size: 20px;
  &:hover {
    color: white;
    border: 2px solid white;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    position: absolute;
    bottom: 50%;
    left: 30%;
  }
`;

export const FloatingBtn = styled(MessageIcon)`
  && {
    position: fixed;
    bottom: 55px;
    right: 20px;
    z-index: 1;
    color: grey;
    font-size: 50px;
    cursor: pointer;

    &:hover {
      color: #eece1a;
      transition: 0.3s;
    }
    @media (max-width: 500px) {
      font-size: 35px;
      position: fixed;
      bottom: 93px;
      right: 20px;
      color: #eece1a


  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  background-image: url(${painters});
  background-position: center;
  background-size: cover;
  filter: opacity(0.9);

  @media (max-width: 500px) {
    margin-top: -32px;
    display: block;
    width: 100%;
    height: 50vh;
    background-image: url(${painters});
  }
`;

export const HeroText = styled.div`
  position: absolute;
  top: 39%;
  left: 19%;
  color: #eece1a;
  font-size: 2rem;
  @media (max-width: 500px) {
    font-size: 20px;
    top: 45%;
    left: 20%;
  }
`;

export const PhoneCall = styled.a`
  position: absolute;
  top: 50%;
  left: 33%;
  color: #eece1a;
  text-decoration: none;
  border: 2px solid #eece1a;
  border-radius: 6px;
  padding: 2px 5px;
  font-size: 20px;
  &:hover {
    border: 2px solid white;
    color: white;
    transition: 0.3s;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    position: absolute;
    top: 83%;
    left: 68%;
    height: 30px;
    /* background-color: white; */
  }
`;

export const HeroFilter = styled.h1`
  position: relative;
`;

export default HeroWrapper;
