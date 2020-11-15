import React from 'react';

export default class CCDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 7,
      color: 'brown'
    };
  }

  btnAddAge = () => {
    console.log(this.state.age);
    //this.state.age = this.state.age+1;
    //this.state = {age: this.state.age++};
    this.setState((prev) => ({ age: prev.age + 1 }));
  }

  chgColor = (e) => {
    console.log(e.target.value);
  }

  btnSendToParent = () => {
    this.props.sendData(this.state.age);
  }

  componentDidMount() { 
  }

  render() {
    //code
    return (
      <div style={{ border: 'solid black 1px', margin: 3 }}>
        im a dog
        <div>name is {this.props.name} {this.props.name === 'chubi' && ' is the great!'}</div>
        <div>hasBone is {this.props.hasBone ? 'yes' : 'no'}</div>
        <h3>stam</h3>
        color : {this.state.color} <br />
        age: {this.state.age}<br />
        <button className="btn btn-danger" onClick={this.btnAddAge} >add age+1</button>
        <input type="text" placeholder="..." onChange={this.chgColor}></input><br />
        <button className="btn btn-warning" onClick={this.btnSendToParent} >send the age to parent</button>
      </div>
    );
  };
}

