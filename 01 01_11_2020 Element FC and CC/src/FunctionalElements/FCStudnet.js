import React from 'react';

export default function FCStudent(props) {

  let num = 18;
  num++;


  return (
    <div style={{
      margin: 10,
      border: 'solid black 2px',
      padding: 5
    }}>
      <h4>your name is {props.name}</h4>
      <h4>your age is {props.age}</h4>
      {/* {props.name = "dora"} */}
      num = {num}
    </div>
  );
}