import React from 'react';

export default function FCStudent(props) {

  let num = 18;
  num++;

  function btnShowNum() {
    console.log(num);
    num++;
    console.log(num);
  }

  function chgText(e) {
    console.log(e.target.value);
  }

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
      <button className="btn btn-danger" onClick={btnShowNum} >show num</button>
      <input type="text" placeholder="..." onChange={chgText}></input>
    </div>
  );
}