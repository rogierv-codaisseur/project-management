import React from 'react';
import { connect } from 'react-redux';

import ProjectsList from './ProjectsList';
import { loadProjects } from '../actions/projects';

class ProjectsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadProjects();
  }

  render() {
    return (
      <div>
        {!this.props.projects && 'Loading'}
        {this.props.projects && <ProjectsList projects={this.props.projects} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projects });

export default connect(
  mapStateToProps,
  { loadProjects }
)(ProjectsListContainer);
