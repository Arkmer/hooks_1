import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Content/Content';

export default props => (
  <div className="App container">
    <Router>
      <Nav />
      <Content />
    </Router>
  </div>
);
