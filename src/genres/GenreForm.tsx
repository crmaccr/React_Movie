import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("genre is required"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField name='name' displayName='Genre' />

          <Button type='submit' disabled={formikProps.isSubmitting}>
            Submit
          </Button>
          <Link to='/genres' className='btn btn-secondary'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    values: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ): void;
}
