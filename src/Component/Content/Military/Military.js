import React from 'react';
import { connect } from 'react-redux';

const Military = props => (
  <React.Fragment>
    <p>Military</p>
    {props.count}
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  count: state.homeReducer.count
});

export default connect(mapStateToProps)(Military);
