import React from 'react';
import PropTypes from 'prop-types';

export default function FCSayMyName(props) {
  return (
    <div>
      <h3>Say MY Name:)</h3>
             my name is : {props.myName !== undefined ? props.myName : 'there is no name yet!'}
    </div>
  )
}

FCSayMyName.propTypes = {
  myName: PropTypes.string.isRequired
}
