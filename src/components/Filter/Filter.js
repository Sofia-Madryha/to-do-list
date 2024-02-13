import { FieldFilter, FormFilter } from "./Filter.styled";

export const Filter = ({ task, filterTasks }) => {
  return (
    <FormFilter>
      <FieldFilter
        value={task}
        name="filter"
        type="text"
        placeholder="find your task"
        onChange={(evt) => filterTasks(evt.target.value)}
      />
    </FormFilter>
  );
};
