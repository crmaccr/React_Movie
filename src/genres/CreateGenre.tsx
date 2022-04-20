import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";

const formSchema = Yup.object().shape({
  genre: Yup.string().required("This field is required"),
});
export default function CreateGenre() {
  return (
    <>
      <h2>CreateGenre</h2>
      <Formik
        initialValues={{ genre: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={formSchema}
      >
        <Form>
          <TextField name='genre' displayName='Genre' />

          <Button type='submit'>Submit</Button>
          <Link to='/genres' className='btn btn-secondary'>
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
}
