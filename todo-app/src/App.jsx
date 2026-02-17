import { useState } from 'react'
import AppName from './components/AppName';
import Add from './components/Add';
import Task from './components/Task';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy Milk", date: "17/02/2026" },
    { id: 2, name: "GO to college", date: "17/02/2026" }
  ]);
  return (
      <div className="container mt-4">
        <AppName />
        <Add />
        {tasks.map(task => (
        <Task 
          key={task.id}
          taskName={task.name}
          taskDate={task.date}
        />
      ))}
      </div>
  );
}

export default App
