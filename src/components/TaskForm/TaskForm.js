import { Formik} from "formik";
import * as Yup from "yup";
import { Button, FieldStyled, FormStyled } from "./TaskForm.styled";

const taskSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const TaskForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validationSchema={taskSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <FormStyled>
        
        <label>
        <FieldStyled name="text" type="text"></FieldStyled>
        </label>
        <Button type="submit">Add task</Button>
      </FormStyled>
    </Formik>
  );
};
