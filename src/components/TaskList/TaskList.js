import { TaskCard } from "../TaskCard/TaskCard";
import { TaskItem, TaskList } from "./TaskList.styled";

export const TasksList = ({ tasks, onDelete}) => {
    return (
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
           <TaskCard taskItem={task} onDelete={onDelete} />
          </TaskItem>
        ))}
      </TaskList>
    );
  };