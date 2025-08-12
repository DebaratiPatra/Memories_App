// src/reducers/auth.js
import * as actionType from '../constants/actionTypes';

const initialState = { authData: null, loading: false, errors: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: null
      };

    case actionType.LOGOUT:
      localStorage.removeItem('profile');
      return {
        ...state,
        authData: null,
        loading: false,
        errors: null
      };

    default:
      return state;
  }
};

export default authReducer;
