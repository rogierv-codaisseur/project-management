import request from 'superagent';

export const TODOS_FETCHED = 'TODOS_FETCHED';

const baseUrl = 'http://localhost:4000';

const todosFetched = todos => ({
  type: TODOS_FETCHED,
  todos
});

export const loadTodos = () => (dispatch, getState) => {
  if (getState().todos) return;

  request(`${baseUrl}/todos`)
    .then(response => {
      dispatch(todosFetched(response.body.todos));
    })
    .catch(console.error);
};
