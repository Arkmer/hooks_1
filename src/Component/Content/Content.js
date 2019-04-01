import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Military from './Military/Military';
import Vue from './Vue/Vue';
import Angular from './Angular/Angular';
import ReactPage from './ReactPage/ReactPage';


export default props => (
  <React.Fragment>
    <p>Content</p>
    <Route path="/home" component={Home} />
    <Route path="/military" component={Military} />
    <Route path="/react" component={ReactPage} />
    <Route path="/vue" component={Vue} />
    <Route path="/angular" component={Angular} />
  </React.Fragment>
);
