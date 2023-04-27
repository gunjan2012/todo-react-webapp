import "./styles/App.css";
import Addtask from "./Components/Addtask";
import Dateday from "./Components/Dateday";
import tasks from "./Components/data/Taskdata";
import Tasks from "./Components/Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(tasks);
  return (
    <div className="container d-flex justify-content-center align-items-center m-0">
      <div className="todo-container">
        <Dateday />
        <Tasks tasks={task} />
        <Addtask />
      </div>
    </div>
  );
}

export default App;
