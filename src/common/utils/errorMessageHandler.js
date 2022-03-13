import {store} from '../../redux/Store';
import {CLEAR_USER_DATA, SET_ERROR_MESSAGE} from '../../redux/types';
import {actionBuilder} from './actionBuilder';

export const clearErrorMessage = () => {
  store.dispatch(actionBuilder(SET_ERROR_MESSAGE, ''));
};

let timeOut;

export const errorMessageHandler = error => {
  console.log('error', error.response, error);
  let message =
    error?.response?.data?.error ||
    'Oops something went wrong, please try again or contact our developer!';

  if (error?.response?.status === 401) {
    store.dispatch(actionBuilder(CLEAR_USER_DATA));
    if (error.response.data?.error?.message)
      message = 'Your session was ended, please login again';
  }
  store.dispatch(actionBuilder(SET_ERROR_MESSAGE, message));

  timeOut && clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    clearErrorMessage();
  }, 5000);
};
