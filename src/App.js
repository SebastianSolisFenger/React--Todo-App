// @ts-nocheck
// // @ts-nocheck
// import React from "react";
import { useState } from 'react';
import './index.css';
import { Tasks } from './components/Tasks';
import AddTask from './components/AddTask';

import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Leisure',
      day: 'Feb 6th at 1:30 pm',
      reminder: true,
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <>
        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No tasks to show.'
        )}
      </>
    </div>
  );
};

// // eslint-disable-next-line react/prefer-stateless-function
// class App extends React.Component {
//   render() {
//     return <h1>Hello!</h1>;
//   }
// }

export default App;
