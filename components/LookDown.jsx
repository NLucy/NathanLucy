import React from 'react';
import img from '../public/assets/Arrow.png';

var LookDown = (props) => {
  return (
    <div id="lookDown">
      <img src={img} className="arrow"></img>
      <img src={img} className="arrow"></img>
      <img src={img} className="arrow"></img>
    </div>
  )
}

export default LookDown;