import { ErrorMessage, Field } from "formik";
import React from "react";

export default function TextField(props: textFieldProps) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.name} className='form-label'>
        {props.displayName}
      </label>
      <Field name={props.name} className='form-control' id={props.name} />
      <ErrorMessage name={props.name}>
        {(msg) => <div className='text-danger'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

interface textFieldProps {
  name: string;
  displayName: string;
}
