import {put, takeLatest} from '@redux-saga/core/effects';
import {API} from '../../common/api/axios';
import {
  balance_url,
  payees_url,
  transactions_url,
  transfer_url,
} from '../../common/api/endpoint';
import {actionBuilder} from '../../common/utils/actionBuilder';
import {
  GET_BALANCE,
  GET_PAYEES,
  GET_TRANSACTIONS,
  MAKE_TRANSFER,
  SET_BALANCE,
  SET_IS_LOADING,
  SET_PAYEES,
  SET_TRANSACTIONS,
  SET_TRANSACTION_STATUS,
} from '../types';
import {
  clearErrorMessage,
  errorMessageHandler,
} from '../../common/utils/errorMessageHandler';
import {grouper} from '../../common/utils/grouper';

function* getBalance() {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    const response = yield API.get(balance_url);
    yield put(actionBuilder(SET_BALANCE, response.data));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

function* getTransaction() {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    const response = yield API.get(transactions_url);
    const groupedData = grouper(response?.data?.data || []);
    yield put(actionBuilder(SET_TRANSACTIONS, groupedData));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

function* getPayees() {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    const response = yield API.get(payees_url);
    console.log('ree', response?.data?.data);
    yield put(actionBuilder(SET_PAYEES, response?.data?.data || []));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

function* makeTransfer(data) {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    yield API.post(transfer_url, data.payload);
    yield put(actionBuilder(SET_TRANSACTION_STATUS, true));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

export default function* transactionSaga() {
  yield takeLatest(GET_BALANCE, getBalance);
  yield takeLatest(GET_TRANSACTIONS, getTransaction);
  yield takeLatest(GET_PAYEES, getPayees);
  yield takeLatest(MAKE_TRANSFER, makeTransfer);
}
