import { TODOS_FETCHED } from '../actions/todos';

export default (state = null, action = {}) => {
  switch (action.type) {
    case TODOS_FETCHED:
      return action.todos;
    default:
      return state;
  }
};
