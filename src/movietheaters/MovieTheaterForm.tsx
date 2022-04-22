import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import TextField from "../forms/TextField";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapField from "../forms/MapField";
import coordinateDTO from "../utils/coordinates.model";

export default function MovieTheaterForm(props: movieFormProps) {
  function transformCoordinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude,
      };
      return [response];
    }
    return undefined;
  }
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("name is required").firstLetterUpperCase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName='Name' field='name' />
          <div style={{ marginBottom: "1rem" }}>
            <MapField
              latField='latitude'
              lngField='longitude'
              coordinates={transformCoordinates()}
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
  model: movieTheaterCreationDTO;
  onSubmit(
    values: movieTheaterCreationDTO,
    formikHelpers: FormikHelpers<movieTheaterCreationDTO>
  ): void;
}
