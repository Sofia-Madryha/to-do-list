import { TaskCard } from "../TaskCard/TaskCard";

export const TasksList = ({ tasks, onDelete}) => {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
           <TaskCard taskItem={task} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  };