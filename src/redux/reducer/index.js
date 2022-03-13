import {combineReducers} from 'redux';
import authReducer from './authReducer';
import validationReducer from './validationReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  auth: authReducer,
  validation: validationReducer,
  transaction: transactionReducer,
});
