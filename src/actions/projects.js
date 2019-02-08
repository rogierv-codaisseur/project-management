import request from 'superagent';

export const PROJECTS_FETCHED = 'PROJECTS_FETCHED';
export const PROJECT_FETCHED = 'PROJECT_FETCHED';

const baseUrl = 'http://localhost:4000';

const projectsFetched = projects => ({
  type: PROJECTS_FETCHED,
  projects
});

const projectFetched = project => ({
  type: PROJECT_FETCHED,
  project
});

export const loadProjects = () => (dispatch, getState) => {
  if (getState().projects) return;

  request(`${baseUrl}/projects`)
    .then(response => {
      dispatch(projectsFetched(response.body.projects));
    })
    .catch(console.error);
};

export const loadProject = id => dispatch => {
  request(`${baseUrl}/projects/${id}`)
    .then(response => {
      dispatch(projectFetched(response.body));
    })
    .catch(console.error);
};
