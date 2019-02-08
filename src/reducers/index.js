import { combineReducers } from 'redux';

import project from './project';
import projects from './projects';
import todos from './todos';

export default combineReducers({
  project,
  projects,
  todos
});
