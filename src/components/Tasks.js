// import { useState } from 'react';
import Task from './Task';

export const Tasks = ({ tasks, onDelete }) => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ))}
  </>
);

export default Tasks;
