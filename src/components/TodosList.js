import React from 'react';

const TodosList = props => {
  return (
    <div>
      <h1 className='f1 lh-title tc'>List of Todos</h1>
      <div className='overflow-auto pa4'>
        <table className='f6 w-100 mw8 center' cellSpacing='0'>
          <thead>
            <tr>
              <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>
                Description
              </th>
              <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Status</th>
            </tr>
          </thead>
          <tbody className='lh-copy'>
            {props.todos.map(todos => (
              <tr key={todos.id}>
                <td className='pv3 pr3 bb b--black-20 tl'>
                  {todos.description}
                </td>
                <td className='pv3 pr3 bb b--black-20 tl'>
                  {(todos.done && 'DONE') || 'OPEN'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodosList;
