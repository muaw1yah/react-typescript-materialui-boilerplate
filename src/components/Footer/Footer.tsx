import React from 'react';
import './Footer.scss';

const Footer = (prop: any) => {
  return (
    <footer className='Footer'>
      <div className='sub-footer'>
        <div className='copyright'>
          <p>&copy; { new Date().getFullYear() } - All Rights Reserved</p>
        </div>
        <div className='contact'>
          <a href='mailto:me@example.com'>me@example.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
