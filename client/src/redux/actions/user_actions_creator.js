import * as actionTypes from '../action_types';

const updateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER_DATA,
    user,
  }
};

export default { updateUser };
