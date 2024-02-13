import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const TaskForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        text: ''
      }}
      validationSchema={taskSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Text
          <Field name="text" type="text" required />
        </label>


        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};