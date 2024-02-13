
import { useEffect, useState } from "react";
import { TasksList } from "./TaskList/TaskList";
import { TaskForm } from "./TaskForm/TaskForm";

import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks !== null) {
      return JSON.parse(savedTasks);
    }
    return [
      { id: "id-1", text: "go to the gym" },
      { id: "id-2", text: "learn new vocabulary" },
      { id: "id-3", text: "feed the cat" },
      { id: "id-4", text: "live" },
    ];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [filter, tasks]);

  // add new task
  const addForm = (newForm) => {
    const nameExists = tasks.some(
      (task) => task.text.toLowerCase() === newForm.text.toLowerCase()
    );
    if (nameExists) {
      alert(`${newForm.text}' is already in tasks.`);
    } else {
      setTasks((prevState) => [...prevState, { id: nanoid(), ...newForm }]);
    }
  };

  // delete task
  const deleteTask = (taskId) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  //filter tasks
  const filterTasks = (newTask) => {
    setFilter(newTask);
  };

  const visibleTasks = tasks.filter((task) => {
    const nameFilter = filter.toLowerCase();
    return task.text.toLowerCase().includes(nameFilter);
  });

  return (
    <div>
      <TaskForm onAdd={addForm} />
      <Filter task={filter} filterTasks={filterTasks} />
      <TasksList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
