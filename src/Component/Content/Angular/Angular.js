import React from 'react';
import { connect } from 'react-redux';

const Content2 = props => (
  <React.Fragment>
    <p>Angular</p>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  // Connect will merge state & ownProps (caution)
});

export default connect(mapStateToProps)(Content2);
