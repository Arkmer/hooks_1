import { navActionsObject } from '../Actions/navActions';

const initialState = navActionsObject;

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_UPDATE":
      console.log('NAV_UPDATE:', action.payload);
      return {...state, logo: action.payload};
    default:
      return state;
  }
}

export default navReducer;
