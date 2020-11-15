import React from 'react';
import { Link } from 'react-router-dom';


export default function FCMenu() {
  return (
    <div style={{margin:20, fontSize:35}} >
      <Link to="/">Home</Link>  &nbsp; | &nbsp;    
      <Link to="/about/8">About</Link> &nbsp; | &nbsp;    
      <Link to="/login">Login</Link>
    </div>
  )
}
