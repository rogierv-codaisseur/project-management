import React from 'react';
import { connect } from 'react-redux';

import ProjectDetails from './ProjectDetails';
import { loadProject } from '../actions/projects';
import { loadTodos } from '../actions/todos';

class ProjectDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadProject(Number(this.props.match.params.id));
    this.props.loadTodos();
  }

  render() {
    if (
      !this.props.project ||
      this.props.project.id !== Number(this.props.match.params.id)
    )
      return 'Loading';
    return (
      <ProjectDetails project={this.props.project} todos={this.props.todos} />
    );
  }
}

const mapStateToProps = state => ({
  project: state.project,
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { loadProject, loadTodos }
)(ProjectDetailsContainer);
