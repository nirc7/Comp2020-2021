import React from 'react';
import { withRouter } from 'react-router-dom';

function FCAbout(props) {
  return (
    <div>
      <h3>About</h3>
      user Id route parameter : {props.match.params.userId} <br />
      state object user Age:
      {props.location.state !== undefined ?
        props.location.state.userObj.userAge :
        ''} <br />
      state object user Name:
      {props.location.state !== undefined ? props.location.state.userObj.userName : ''} <br />
    </div>
  )
}
export default withRouter(FCAbout);
