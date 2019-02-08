import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import TodosList from './TodosList';

const ProjectDetails = props => {
  return (
    <div>
      <h1 className='f1 lh-title tc'>{props.project.name.toUpperCase()}</h1>
      <div className='fl w-third pa2'>
        <h1 className='f3 lh-title tl'>Project description</h1>
        <p className='f6'>
          <br />
          <br />
          Start date:
          <Moment format='DD-MM-YYYY'>{props.project.startDate}</Moment>
        </p>
        <p className='f6'>
          End date: <Moment format='DD-MM-YYYY'>{props.project.endDate}</Moment>
        </p>
        <p className='f6'>Owner: {props.project.projectCreator}</p>
        <Link to='/projects'>Back</Link>
        <br />
        <br />
        <span>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onEdit}>Edit</button>
        </span>
      </div>

      <div className='fl w-two-thirds pa2'>
        {!props.todos && 'Loading'}
        {props.todos === [] && 'No todos'}
        {props.todos && <TodosList todos={props.todos} />}
      </div>
    </div>
  );
};

export default ProjectDetails;
