import { PROJECT_FETCHED } from '../actions/projects';

export default (state = null, action = {}) => {
  switch (action.type) {
    case PROJECT_FETCHED:
      return action.project;
    default:
      return state;
  }
};
