import React, { Component } from 'react';
import './App.css';

const Users = [
  { id: 1, name: 'avi' },
  { id: 2, name: 'ben' },
  { id: 3, name: 'charlie' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Users
    };
  }

  btnDelete = (e) => {
    console.log(e.target.dataset.userid);
    let newUsers = this.state.users.filter(user => user.id !== parseInt(e.target.dataset.userid));
    this.setState({ users: newUsers });
  }

  btnDelete2 = (uid) => {
    console.log(uid);
    let newUsers = this.state.users.filter(user => user.id !== uid);
    this.setState({ users: newUsers });
  }

  render() {
    let usersLi = this.state.users.map(user =>
      <li key={user.id}>{user.id} -- {user.name}
        <a href="#" data-userid={user.id} onClick={this.btnDelete} >X</a> </li>);

    let usersLi2 = this.state.users.map(user =>
      <li key={user.id}>{user.id} -- {user.name}
        <a href="#" onClick={() => this.btnDelete2(user.id)} >X</a> </li>);
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {usersLi}
          </ul> <br />
          <ul>
            {usersLi2}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
