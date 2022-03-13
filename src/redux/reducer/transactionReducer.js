import {
  GET_BALANCE,
  GET_PAYEES,
  GET_TRANSACTIONS,
  MAKE_TRANSFER,
  SET_BALANCE,
  SET_PAYEES,
  SET_TRANSACTIONS,
  SET_TRANSACTION_STATUS,
} from '../types';

const initState = {
  accountNo: '',
  balance: 0,
  payees: [],
  transactions: [],
  transactionStatus: false,
};

const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BALANCE:
      return state;

    case GET_PAYEES:
      return state;

    case GET_TRANSACTIONS:
      return state;

    case MAKE_TRANSFER:
      return state;

    case SET_BALANCE:
      return {
        ...state,
        accountNo: action.payload.accountNo,
        balance: action.payload.balance,
      };

    case SET_PAYEES:
      return {
        ...state,
        payees: action.payload,
      };

    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case SET_TRANSACTION_STATUS:
      return {
        ...state,
        transactionStatus: action.payload,
      };

    default:
      return state;
  }
};

export default transactionReducer;
