import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import store from './store';
import ProjectDetailsContainer from './components/ProjectDetailsContainer';
import ProjectsListContainer from './components/ProjectsListContainer';
import TodosListContainer from './components/TodosListContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route path='/' exact component={ProjectsListContainer} />
          <Route path='/projects' exact component={ProjectsListContainer} />
          <Route path='/projects/:id' component={ProjectDetailsContainer} />
          <Route path='/todos' component={TodosListContainer} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
