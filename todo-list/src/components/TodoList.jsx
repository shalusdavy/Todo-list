import React, { useState } from "react";
import axios from "axios";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [TaskDescription, setTaskDescription] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");

  const addTask = () => {
    const newTask = {
      description: TaskDescription,
    };

    axios
      .post("http://localhost:3005/post", { task: newTask })
      .then((res) => {
        setTasks([tasks]);

        setTaskDescription("");
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  console.log(tasks);

  
  const updateTaskList = () => {
    let filteredTasks = tasks;

    return (
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div className="task-card" key={index}>
            <div className="priority-bar"></div>
            <p className={task.completed} onClick={() => taskcomplt(index)}>
              {task.description}
            </p>
            <button className="edit-button" onClick={() => editTask(index)}>
              <p><span class="material-symbols-outlined">
edit
</span></p>
            </button>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => taskcomplt(index)}
            />
          </div>
        ))}
      </div>
    );
  };

  const taskcomplt = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {};

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Add new task..."
          id="new-task"
          value={TaskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select
          id="task-filter"
          value={taskFilter}
          onChange={(e) => setTaskFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="important">Important</option>
          <option value="optional">Optional</option>
        </select>
        <button id="add-task-button" onClick={addTask}>
          +
        </button>
      </div>
      {updateTaskList()}
      <footer>
        Total tasks:{" "}
        <span id="completed-tasks">
          
        </span>
      </footer>
    </div>
  );
}

export default TodoList;
