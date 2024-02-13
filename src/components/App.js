import { useEffect, useState } from "react";
import { TasksList } from "./TaskList/TaskList";
import { TaskForm } from "./TaskForm/TaskForm";

import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./Container/Container.styled";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks !== null) {
      return JSON.parse(savedTasks);
    }
    return [
      { id: "id-1", text: "do some assignments" },
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
      setTasks((prevState) => [...prevState, { id: nanoid(), ...newForm }] ,);
     
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
    <Container>
      <Title>TO DO LIST </Title>
      <TaskForm onAdd={addForm} />
      <Filter task={filter} filterTasks={filterTasks} />
      <TasksList tasks={visibleTasks} onDelete={deleteTask} />
    </Container>
  );
}

export default App;
