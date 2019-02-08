import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';
import ProjectsListContainer from './components/ProjectsListContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <ProjectsListContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
