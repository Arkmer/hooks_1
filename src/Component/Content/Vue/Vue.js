import React from 'react';
import { connect } from 'react-redux';

const Content1 = props => (
  <React.Fragment>
    <p>Vue</p>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
// Connect will merge state & ownProps (caution)
});

export default connect(mapStateToProps)(Content1);
