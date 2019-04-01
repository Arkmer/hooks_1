import React from 'react';
import './NavLinks.css';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { navUpdate } from '../../../Redux/Actions/navActions';

const NavLinks = props => (
  <div className="NavLinks">
    <Link onClick={() => props.dispatch(navUpdate('/home'))} to="/home"><div  className="NavLinks-link">Home</div></Link>
    <Link onClick={() => props.dispatch(navUpdate('/military'))} to="/military"><div  className="NavLinks-link">Military</div></Link>
    <Link onClick={() => props.dispatch(navUpdate('/react'))} to="/react"><div className="NavLinks-link">React</div></Link>
    <Link onClick={() => props.dispatch(navUpdate('/vue'))} to="/vue"><div className="NavLinks-link">Vue</div></Link>
    <Link onClick={() => props.dispatch(navUpdate('/angular'))} to="/angular"><div className="NavLinks-link">Angular</div></Link>
  </div>
);

export default connect()(NavLinks);