import React, { useEffect, useState } from "react";

// Imported Components below
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompletedTasks";

function InputTask() {
  // Initial array for storing list items
  // Tracking state of input box
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [completedTasks, setCompletedTasks] = useState(
    JSON.parse(localStorage.getItem("completedTasks") || "[]")
  );

  function addCompletedTask(index) {
    setCompletedTasks(prev => prev.concat(tasks[index]));
    function removeTask(task, i) {
      if (i !== index) {
        return task;
      }
    }
    setTasks(prev => prev.filter(removeTask));
  }

  function deleteTask(index) {
    function checkIndex(task, i) {
      if (i !== index) {
        return task;
      }
    }
    setTasks(prev => prev.filter(checkIndex));
  }

  function modifyTask(index) {
    let editedTask = prompt("Please edit task here..", tasks[index]);
    function editTask(task, i) {
      if (i === index) {
        task = editedTask;
      }
      return task;
    }
    setTasks(prev => prev.map(editTask));
  }

  function handleAddTask() {
    setTasks(prev => prev.concat(task));
  }

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    console.log(completedTasks);
  }, [completedTasks]);

  useEffect(() => {
    // Saves every time tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTask("");
  }, [tasks]);

  return (
    <div className="container">
      <div className="input-group mt-4">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          className="form-control form-control-lg"
          placeholder="Write task here..."
        />
        <div className="input-group-append">
          <button onClick={handleAddTask} className="btn btn-outline-secondary">
            Add
          </button>
        </div>
      </div>
      <CurrentTasks
        allTasks={tasks}
        deleteTask={deleteTask}
        modifyTask={modifyTask}
        addCompletedTask={addCompletedTask}
      />
      <CompletedTasks completedTasks={completedTasks} />
    </div>
  );
}

export default InputTask;
