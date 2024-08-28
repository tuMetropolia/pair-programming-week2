import React from 'react'

const Random = (props) => {
    let range = props.max - props.min + 1;
    let randomNum = Math.floor(Math.random() * range) + props.min;

  return (
    <div>
      <p>Random value between {props.min} and {props.max} ={'>'} {randomNum}</p>
    </div>
  );
}

export default Random;


