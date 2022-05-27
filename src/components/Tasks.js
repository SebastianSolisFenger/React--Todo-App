// import { useState } from 'react';
import Task from './Task';

export const Tasks = ({ tasks, onDelete, onToggle }) => (
  <>
    {tasks.map((task, index) => (
      <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
  </>
);

export default Tasks;
