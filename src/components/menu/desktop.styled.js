import { Link } from '@reach/router';
import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: hsl(234, 12%, 34%); */
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  /* position: fixed;
  top: 10px;
  left: 0;
  right: 0; */
  /* z-index: 10; */
  background-color: hsl(234, 12%, 34%);

  @media (max-width: 600px) {
    display: none;
  }
`;
export const StyledLink = styled(Link)`
  margin: 1rem;
  color: #eece1a;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    /* color: black; */
    border-bottom: 2px solid white;
    color: white;
    transition: 0.3s;
    /* border-radius: 6px; */
  }
`;
export const StyledLinks = styled(Link)`
  margin: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;

  &:hover {
    display: block;
  }
`;

export const ContactLink = styled(Link)`
  position: absolute;
  bottom: 45.4%;
  left: 47%;
  color: #eece1a;
  text-decoration: none;
  border: 2px solid #eece1a;
  border-radius: 6px;
  padding: 2px 5px;
  font-size: 20px;
  &:hover {
    color: white;
    border: 2px solid white;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    position: absolute;
    bottom: 10%;
    left: 35%;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  color: #eece1a;
`;

export default StyledLink;
