// reducers.js
import * as types from './constants';

const initialState = {
  data: [],
  sortedData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        sortedData: action.payload,
      };
    case types.DELETE_DATA_SUCCESS:
      const newData = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        data: newData,
        sortedData: newData,
      };
    default:
      return state;
  }
};

export default rootReducer;
