import React from 'react'
import { StyledHeader, StyledLogo } from './Styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src="https://www.try-shades.com/images/logo.png" alt="img" />
      <div className='links'>
        <h5>Home</h5>
        <h5>Home</h5>
        <h5>Home</h5>
        <h5>Home</h5>
      </div>
    </StyledHeader>
  );
}

export default Header