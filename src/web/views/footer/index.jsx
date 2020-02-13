// Libraries
import PropTypes from 'prop-types';
import React, {useState} from 'react';

// Images
import Erenndriel from 'resources/images/erenndriel.svg';
import IconHearts from 'resources/images/icon_hearts.svg';

// Stylesheet(s)
import './styles.css';

const Footer = () => {
  return <div className='ninjaurl__footer'>
    <p>Made with <IconHearts width={15} height={15} fill={'red'}/> by</p>
    <Erenndriel height={30} fill='#7fffd4' />
  </div>;
};

export default Footer;
