import React from 'react';
import { Image } from 'semantic-ui-react';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';
import d4 from '../images/d4.png';
import d5 from '../images/d5.png';
import d6 from '../images/d6.png';

const images = { d1, d2, d3, d4, d5, d6 }

const Dice = ({ value }) => (
  <Image src={images[`d${value}`]} alt={`dice value ${value}`} />
)

export default Dice;