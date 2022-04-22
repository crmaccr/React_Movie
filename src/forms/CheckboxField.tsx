import { Field } from "formik";
import React from "react";

export default function CheckboxField(props: checkBoxField) {
  return (
    <div className='mb-3'>
      <Field
        className='form-check-input'
        id={props.field}
        type='checkbox'
        name={props.field}
      />
      <label htmlFor={props.field}>{props.field}</label>
    </div>
  );
}

interface checkBoxField {
  displayName: string;
  field: string;
}
