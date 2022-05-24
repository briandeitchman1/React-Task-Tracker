import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
      reminder: true,
    },
    {
      id: 3,
      text: "pick up kids",
      day: "Feb 5th at 2 ",
      reminder: true,
    }
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
