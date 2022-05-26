// @ts-nocheck
// // @ts-nocheck
// import React from "react";
import { useState } from 'react';
import './index.css';
import { Tasks } from './components/Tasks';

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

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <>
        <Header />
        <Tasks tasks={tasks} onDelete={deleteTask} />
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
