import { IoCloseSharp } from "react-icons/io5";
import { TaskCardStyle, TaskCardText, Buttons } from "./TaskCard.styled";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const TaskCard = ({ taskItem: { id, text }, onDelete }) => {
  return (
    <TaskCardStyle>
      <TaskCardText>{text}</TaskCardText>
      <Buttons>
      <Checkbox {...label} color="default" size="small" padding = "0"/>
      <IoCloseSharp
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </IoCloseSharp></Buttons>
    </TaskCardStyle>
  );
};
