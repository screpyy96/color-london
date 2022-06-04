import React from 'react';
import { Router } from '@reach/router';
import HeroWrapper, {
  HeroText,
  HeroFilter,
  PhoneCall,
  FloatingBtn,
  ImgBtn,
} from './hero.styled';
// import MessageIcon from '@mui/icons-material/Message';
import { ContactLink } from '../menu/desktop.styled';
import Contact from '../contact/';

const Hero = () => {
  return (
    <div>
      <HeroFilter>
        <HeroWrapper />
        <HeroText>Loyalty. Customer Focus. Exceeding Expectations</HeroText>

        <ContactLink to='/contact'>Get a Quote</ContactLink>
        <PhoneCall href='tel:07930097259'>Call Cineva</PhoneCall>
        <ImgBtn to='/contact'>
          <FloatingBtn />
        </ImgBtn>
      </HeroFilter>
      <Router>
        <Contact path='/contact' />
      </Router>
    </div>
  );
};

export default Hero;
