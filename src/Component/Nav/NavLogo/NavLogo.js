import React from 'react';
import './NavLogo.css';
import reactLogo from './Logos/react-icon.png';
import castle from './Logos/castle-icon.gif';
import vueLogo from './Logos/vue-icon.svg';
import angularLogo from './Logos/angular-icon.svg';
import homeLogo from './Logos/home-icon.png';

export default props => {
  switch (props.logo) {
    case '/home':
      return (
        <React.Fragment>
          <img src={homeLogo} className="NavLogo-home" alt="logo" />
        </React.Fragment>
      );
    case '/military':
      return (
        <React.Fragment>
          <img src={castle} className="NavLogo-castle" alt="logo" />
        </React.Fragment>
      );
    case '/vue':
      return (
        <React.Fragment>
          <img src={vueLogo} className="NavLogo-vue" alt="logo" />
        </React.Fragment>
      );
    case '/angular':
      return (
        <React.Fragment>
          <img src={angularLogo} className="NavLogo-angular" alt="logo" />
        </React.Fragment>
      );
    case '/react':
      return (
        <React.Fragment>
          <img src={reactLogo} className="NavLogo-react" alt="logo" />
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <img src={homeLogo} className="NavLogo-home" alt="logo" />
        </React.Fragment>
      );
  }
};
