import {
  SET_VALIDATION_CHECKED,
  SET_ERROR_MESSAGE,
  SET_IS_LOADING,
  SET_REGISTER_STATUS,
} from '../types';

const initState = {
  errorMessage: '',
  validationChecked: false,
  registrationStatus: false,
  isLoading: false,
};

const validationReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case SET_REGISTER_STATUS:
      return {
        ...state,
        registrationStatus: action.payload,
      };

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_VALIDATION_CHECKED:
      return {
        ...state,
        validationChecked: action.payload,
      };

    default:
      return state;
  }
};

export default validationReducer;
