import React from 'react';
import { connect } from 'react-redux';
import { plusOne, minusOne } from '../../../Redux/Actions/homeActions';
import storeInstance from '../../../Redux/Store';

const handleButtonClick = (input) => (e) => {
  console.log('Dispatch:', input);
  switch (input) {
    case 1:
      storeInstance.dispatch(plusOne(input))
      break;
    case -1:
      storeInstance.dispatch(minusOne(input))
      break;
    default:
      return null;
  }
}

const Home = props => (
  <React.Fragment>
      <p>Home</p>
      <p>Count: {props.count}</p>
      <button onClick={handleButtonClick(1)}>Count ++</button>
      <button onClick={handleButtonClick(-1)}>Count --</button>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  count: state.homeReducer.count,
});

export default connect(mapStateToProps)(Home);
