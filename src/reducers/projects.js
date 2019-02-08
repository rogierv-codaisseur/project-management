import { PROJECTS_FETCHED } from '../actions/projects';

export default (state = null, action = {}) => {
  switch (action.type) {
    case PROJECTS_FETCHED:
      return action.projects;
    default:
      return state;
  }
};
