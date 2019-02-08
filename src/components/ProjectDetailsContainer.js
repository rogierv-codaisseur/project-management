import React from 'react';
import { connect } from 'react-redux';

import ProjectDetails from './ProjectDetails';
import { loadProject } from '../actions/projects';
import { loadProjectTodos } from '../actions/todos';

class ProjectDetailsContainer extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.loadProject(id);
    this.props.loadProjectTodos(id);
  }

  render() {
    if (
      !this.props.project ||
      !this.props.todos ||
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
  { loadProject, loadProjectTodos }
)(ProjectDetailsContainer);
