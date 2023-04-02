import * as TYPES from "../constants/ActionTypes";

export default function AppReducer(state, action) {
  switch (action.type) {
    case TYPES.CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case TYPES.UPDATE_USER:
      const updateUser = action.payload;
      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...state,
        users: updateUsers,
      };

    case TYPES.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
}
