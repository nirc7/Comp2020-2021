import React, { Component } from 'react';
import './App.css';
import EFE from './Elements/EFirstElem';
import CCDog from './ClassComponents/CCDog';
import LoginPage from './ClassComponents/LoginPage';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appAge: 7,
      names: ["avi", "ben", "charlie"],
      //userName:'stam'
    };
  }

  getData = (data) => {
    this.setState({
      appAge: data
    });
  }

  chgTxtName = (e) => {
    let newStr = e.target.value.replace('6', '');
    this.setState({ userName: newStr });
  }

  render() {

    let namesLi = this.state.names.map((name, index) =>
      <li className="list-group-item" key={index}>{index}.{name} +  ":)"</li>);

    return (
      <div style={{ padding: 5 }}>
        <LoginPage/>
        {/* APP {this.state.appAge}
        <br />
        <input type="text" name="userName" value={this.state.userName} /> <br />
        <input type="text" name="userName" value={this.state.userName}
          placeholder="insert your name..."
          onChange={this.chgTxtName} />
        <ol className="list-group">
          {namesLi}
        </ol>
        <CCDog name="Snoopy" hasBone={true} sendData={this.getData} />
        <CCDog name="chubi" hasBone={false} sendData={this.getData} />
        {EFE} */}
      </div>);
  }
}
