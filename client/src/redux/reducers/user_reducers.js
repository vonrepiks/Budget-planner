import * as actionTypes from '../action_types';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const updateUser = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_USER_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}

export default updateUser;
