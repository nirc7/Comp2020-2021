import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function FCStudent(props) {

  let name="gil";

  function chgName(e) {
    console.log(e.target.value);
    name= e.target.value;
  }


  function btnSendName(){
     props.sendNameFromFCStudent(name);
  }

  return (
    <div>
      <h3>FCStudent</h3>
      <TextField id="standard-basic" label="enter your name" onChange={chgName} /> <br /> <br />
      <Button
        variant="contained"
        color="primary"
        onClick={btnSendName}
        >Say Hello</Button> <br/>
        name= {name}
    </div>
  )
}
