import styled from "styled-components";

export const TaskList = styled.ul`
  flex-direction: column;
  font-size: 19px;
  display: flex;
  align-items: center;
  padding: 0.25em 0.5em;
  border-radius: 30px;
  justify-content: center;
  gap: 15px;
`;

export const TaskItem = styled.li`
  width: 400px;
  padding: 13px;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.lightOrange};
`;
