import React, { Component } from 'react';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoggedIn: false
    };
  }

  chgEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  chgPass = (e) => {
    this.setState({ pass: e.target.value });
  }

  btnLogin = () => {
    //this.setState({ isLoggedIn: this.state.email === 'avi@a.com' && this.state.pass === '123' });

    if (this.state.email === 'avi@a.com' && this.state.pass === '123') {
      this.setState({ isLoggedIn: true });
    }
    else {
      this.setState({ isLoggedIn: false });
    }
  }

  render() {
    return (
      <div>
        <center>
          <h2> login page </h2>
          <input type="text" style={{ margin: 5 }} onChange={this.chgEmail} placeholder="insert your email" /><br />
          <input type="text" style={{ margin: 5 }} onChange={this.chgPass} placeholder="insert your pass" /> <br />
          <input type="button" style={{ margin: 5 }}
            onClick={this.btnLogin}
            className="btn btn-success" value="Login" />
          <h3>{this.state.isLoggedIn ? 'shalom avi your email is : ' + this.state.email :
            'your are not logged in!'}</h3>
        </center>
      </div>
    );
  }
}