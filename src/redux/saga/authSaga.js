import {put, takeLatest} from '@redux-saga/core/effects';
import {API} from '../../common/api/axios';
import {login_url, register_url} from '../../common/api/endpoint';
import {actionBuilder} from '../../common/utils/actionBuilder';
import {
  LOGIN,
  REGISTER,
  SAVE_USER_DATA,
  SET_IS_LOADING,
  SET_REGISTER_STATUS,
} from '../types';
import {
  clearErrorMessage,
  errorMessageHandler,
} from '../../common/utils/errorMessageHandler';

function* login(data) {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    const response = yield API.post(login_url, data.payload);
    yield put(actionBuilder(SAVE_USER_DATA, response.data));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

function* register(data) {
  yield put(actionBuilder(SET_IS_LOADING, true));
  clearErrorMessage();
  try {
    yield API.post(register_url, data.payload);
    yield put(actionBuilder(SET_REGISTER_STATUS, true));
  } catch (error) {
    errorMessageHandler(error);
  }
  yield put(actionBuilder(SET_IS_LOADING, false));
}

export default function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
}
