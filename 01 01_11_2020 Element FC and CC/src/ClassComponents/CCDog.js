import React from 'react';

export default class CCDog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //code
    return (
      <div>
        <div>name is {this.props.name} {this.props.name === 'chubi' && ' is the great!'}</div>
        <div>hasBone is {this.props.hasBone ? 'yes' : 'no'}</div>
        <h3>stam</h3>
      </div>
    );
  };
}

