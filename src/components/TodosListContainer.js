import React from 'react';
import { connect } from 'react-redux';

import TodosList from './TodosList';
import { loadTodos } from '../actions/todos';

class TodosListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div>
        {!this.props.todos && 'Loading'}
        {this.props.todos && <TodosList todos={this.props.todos} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { loadTodos }
)(TodosListContainer);
