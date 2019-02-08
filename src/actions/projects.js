import request from 'superagent';

export const PROJECTS_FETCHED = 'PROJECTS_FETCHED';

const baseUrl = 'http://localhost:4000';

const projectsFetched = projects => ({
  type: PROJECTS_FETCHED,
  projects
});

export const loadProjects = () => (dispatch, getState) => {
  if (getState().projects) return;

  request(`${baseUrl}/projects`)
    .then(response => {
      dispatch(projectsFetched(response.body.projects));
    })
    .catch(console.error);
};
