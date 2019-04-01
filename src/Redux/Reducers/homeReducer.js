import { CountAdjusters } from '../Actions/homeActions';

const initialState = CountAdjusters;

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_ONE':
      console.log('Reducer +:', state.count);
      return {...state, count: state.count + 1};
    case 'MINUS_ONE':
      console.log('Reducer -:', state.count);
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

export default homeReducer;