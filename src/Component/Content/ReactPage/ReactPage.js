import React from 'react';
import { connect } from 'react-redux';

const ReactPage = props => (
  <React.Fragment>
    <p>React</p>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(ReactPage);
