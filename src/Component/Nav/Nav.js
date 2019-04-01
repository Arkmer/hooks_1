import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import NavLinks from './NavLinks/NavLinks';
import NavTitle from './NavTitle/NavTitle';
import NavLogo from './NavLogo/NavLogo';

const Nav = props => (
  <header className="Nav">
    <div className="Nav-logoContainer">
      <NavLogo logo={props.logo} />
    </div>
    <div>
      <NavTitle data={"Redux, Sagas, and maybe Hooks"} />
      <NavLinks />
    </div>
  </header>
);

const mapStateToProps = (state, ownProps) => ({
  logo: state.navReducer.logo
});

export default connect(mapStateToProps)(Nav);
