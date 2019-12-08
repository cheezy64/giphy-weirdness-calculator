import { combineReducers } from 'redux';
import types from './types';

/* Shape:
liked: [{
  imgHeader,
  imgUrl,
  weirdness
}]
*/

const initialState = {
  liked: []
};

const likesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GIPHY_LIKE:
      return {
        ...state,
        liked: [...state.liked, payload]
      };
    case types.GIPHY_UNLIKE:
      const filtered = state.liked.filter(({ imgHeader }) => imgHeader !== payload);
      console.log(state.liked);
      console.log(payload);
      return {
        ...state,
        liked: filtered
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  likes: likesReducer,
});

export default reducers;
