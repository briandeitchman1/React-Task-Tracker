import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "dentist",
      day: "Feb 5th at 2 ",
      reminder: true,
    },
    {
      id: 2,
      text: "shopping",
      day: "Feb 5th at 2 ",
      reminder: false,
    },
    {
      id: 3,
      text: "pick up kids",
      day: "Feb 5th at 2 ",
      reminder: true,
    }
  ])
  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task
    }))
  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : "No Task to show"
      }
    </div>
  );
}

export default App;
