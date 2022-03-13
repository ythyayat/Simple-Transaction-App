import {CLEAR_USER_DATA, LOGIN, REGISTER, SAVE_USER_DATA} from '../types';

const initState = {
  token: '',
  accountNo: '',
  username: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;

    case REGISTER:
      return state;

    case SAVE_USER_DATA:
      return {
        ...state,
        token: action.payload.token,
        accountNo: action.payload.accountNo,
        username: action.payload.username,
      };

    case CLEAR_USER_DATA:
      return {
        ...state,
        token: '',
        accountNo: '',
        username: '',
      };

    default:
      return state;
  }
};

export default authReducer;
