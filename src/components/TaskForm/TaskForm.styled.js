import styled from "styled-components";
import { Form, Field } from "formik";

export const FormStyled = styled(Form)`
  display: flex;
  font-size: 1.7rem;
  justify-content: center;
  margin: 15px 0 5px 0;
  padding: 0.8rem;
  width: 100%;
  gap: 5px;
`;

export const FieldStyled = styled(Field)`
  padding: 10px;
  font-size: 17px;
  border: none;
  outline: none;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  max-width: 500px;
  width: 100%;
  background-color: #dcdcdc;
  color: #1a150e;
  &:hover {
    cursor: text;
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 17px;
  min-width: 100px;
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.colors.lightOrange};
  color: rgb(0, 0, 0);
`;
