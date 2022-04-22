import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";

export default function MovieForm(props: movieFormProps) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={props.model}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("title is required")
          .firstLetterUpperCase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field='title' displayName='Title' />
          <TextField field='trailer' displayName='Trailer' />
          <CheckboxField field='inTheaters' displayName='In Theaters' />
          <DateField displayName='ReleaseDate' field='releaseDate' />
          <div className='mb-3'>
            <ImageField
              displayName='Poster'
              field='poster'
              imageURL={props.model.posterURL}
            />
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>
            Save
          </Button>
          <Link to='/' className='btn btn-secondary ms-3'>
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    formikHelpers: FormikHelpers<movieCreationDTO>
  ): void;
}
