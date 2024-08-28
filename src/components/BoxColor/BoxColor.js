import React from 'react';

const BoxColor = (props) => {
  let r = props.r;
  let g = props.g;
  let b = props.b;
  let color = 'rgb(' + r + ',' + g + ',' + b + ')';
  let style = {
    // backgroundColor: 'rgb(103, 191, 191)'
    backgroundColor: color
  };
  
  return <div style={style}>BoxColor</div>;
};

export default BoxColor;
