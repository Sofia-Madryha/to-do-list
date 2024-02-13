import styled from "styled-components";

export const FormFilter = styled.form`
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  margin: 0;
  padding: 0.8rem;
  width: 350px
  gap: 5px;
`;

export const FieldFilter = styled.input`
  padding: 12px;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  background-color: #dcdcdc;
  color: #1a150e;
  &:hover {
    cursor: text;
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

