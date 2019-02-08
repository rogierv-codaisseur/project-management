import React from 'react';
import { Link } from 'react-router-dom';

import TodosList from './TodosList';

const ProjectDetails = props => {
  return (
    <div>
      <h1 className='f1 lh-title tc'>{props.project.name.toUpperCase()}</h1>
      <p>Start date: {props.project.startDate}</p>
      <p>End date: {props.project.endDate}</p>
      <p>Project owner: {props.project.projectCreator}</p>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>
      <br />

      {!props.todos && 'Loading'}
      {props.todos && <TodosList todos={props.todos} />}

      <Link to='/projects'>Back to Project Overview</Link>
    </div>
  );
};

export default ProjectDetails;
