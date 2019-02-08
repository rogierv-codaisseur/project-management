import React from 'react';

const ProjectsList = props => {
  return (
    <div>
      <h1>List of Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start date</th>
            <th>End date</th>
          </tr>
        </thead>
        <tbody>
          {props.projects.map(project => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
