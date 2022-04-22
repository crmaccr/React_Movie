import { ErrorMessage, Field } from "formik";
import React from "react";

export default function TextField(props: textFieldProps) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.field} className='form-label'>
        {props.displayName}
      </label>
      <Field name={props.field} className='form-control' id={props.field} />
      <ErrorMessage name={props.field}>
        {(msg) => <div className='text-danger'>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

interface textFieldProps {
  field: string;
  displayName: string;
}
