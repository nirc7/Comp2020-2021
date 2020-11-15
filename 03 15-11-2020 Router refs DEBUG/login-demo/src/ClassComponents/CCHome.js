import React, { Component } from 'react';
import '../App.css';
import FCStudent from '../FunctionalComponents/FCStudent';
import FCSayMyName from '../FunctionalComponents/FCSayMyName';
import { Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

class CCHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined
    };

    this.txtNum = React.createRef();
  }

  chgNum = () => {
    this.setState({ num: this.txtNum.current.value });
  }

  getNameFromFCStudent = (n) => {
    this.setState({ name: n });
  }

  btnNum = () => {
    this.setState({ num: this.txtNum.current.value });
  }

  btnSendData = () => {
    var userObj = {
      userAge: 44,
      userName: 'avi'
    };

    this.props.history.push({
      pathname: '/about/88',
      search: '?query=abc',
      state: { userObj: userObj }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button
            variant="contained"
            color="secondary"
            onClick={this.btnSendData}
          >Send Data</Button> <br />

          <FCStudent sendNameFromFCStudent={this.getNameFromFCStudent} /> <br />
          <FCSayMyName myName={this.state.name} /> <br />
          <input type="text" ref={this.txtNum} /><br />
          num={this.state.num}
          <input type="button" onClick={this.btnNum} value="num" />
        </header>
      </div>
    );
  }
}

export default withRouter(CCHome);