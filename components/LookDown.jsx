import React from 'react';
import img from '../public/assets/Arrow.png';

var LookDown = (props) => {
  return (
    <div id="lookDown">
      <img src={img} className="arrow" id='arrow1'></img>
      <img src={img} className="arrow" id='arrow2'></img>
      <img src={img} className="arrow" id='arrow3'></img>
    </div>
  )
}

export default LookDown;