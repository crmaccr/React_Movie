import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { actorCreationDTO } from "./actor.model";
import * as Yup from "yup";
import configureValidations from "../validation";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";
configureValidations();
export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("name is required").firstLetterUpperCase(),
        dateOfBirth: Yup.date().nullable().required("date is required"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName='Name' field='name' />
          <DateField displayName='Date Of Birth' field='dateOfBirth' />
          <ImageField
            displayName='Actor'
            field='picture'
            imageURL={props.model.pictureURL}
          />
          <MarkdownField displayName='Biography' field='biography' />
          <div className='mt-3'>
            <Button disabled={formikProps.isSubmitting} type='submit'>
              Save Changes
            </Button>
            <Link to='/actors' className='btn btn-secondary ms-3'>
              Cancel
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    onSubmit: FormikHelpers<actorCreationDTO>
  ): void;
}

// Step1: Create Interface for formProps (model, and onSubmit)
// Step2: Create the formik Fields
//
