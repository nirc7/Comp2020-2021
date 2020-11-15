import React, { Component } from 'react';
import './App.css';
import CCHome from './ClassComponents/CCHome';
import { Switch, Route,  withRouter } from 'react-router-dom';
import FCAbout from './FunctionalComponents/FCAbout';
import CCLogin from './ClassComponents/CCLogin';
import FCMenu from './FunctionalComponents/FCMenu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  } 

  render() {
    return (
      <div className="App">
         <FCMenu/>
        <header className="App-header">         
        <Switch>
          <Route exact path="/" >
            <CCHome />
          </Route>
          <Route path="/about/:userId">
            <FCAbout/>
          </Route>
          <Route path="/Login" >
            <CCLogin/>
          </Route>
        </Switch> 
        </header>
         <h4>FOOTER</h4>
      </div>
    );
  }
}

export default withRouter(App);