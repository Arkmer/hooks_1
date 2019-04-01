import React from 'react';
import './NavTitle.css';

export default props => (
  <div className="NavTitle">
    <h1 className="NavTitle-title">{props.data}</h1>
  </div>
);
