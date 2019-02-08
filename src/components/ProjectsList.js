import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return (
    <div>
      <h1 className='f1 lh-title tc'>List of Projects</h1>
      <div className='overflow-auto pa4'>
        <table className='f6 w-100 mw8 center' cellSpacing='0'>
          <thead>
            <tr>
              <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
                Project Name
              </th>
              <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
                Start date
              </th>
              <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
                End date
              </th>
            </tr>
          </thead>
          <tbody className='lh-copy'>
            {props.projects.map(project => (
              <tr key={project.id}>
                <td className='pv3 pr3 bb b--black-20 tl'>
                  <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </td>
                <td className='pv3 pr3 bb b--black-20 tl'>
                  <Moment format='DD-MM-YYYY'>{project.startDate}</Moment>
                </td>
                <td className='pv3 pr3 bb b--black-20 tl'>
                  <Moment format='DD-MM-YYYY'>{project.endDate}</Moment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsList;
