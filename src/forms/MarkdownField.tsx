import { Field, useFormikContext } from "formik";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownField.css";
export default function MarkdownField(props: markdownFieldProps) {
  const { values } = useFormikContext<any>();
  return (
    <div className='mb-3 form-markdown'>
      <div>
        <label>{props.displayName}</label>
        <Field name={props.field} as='textarea' className='form-textarea' />
      </div>
      <div>
        <label> {props.displayName} (preview:)</label>
        <div className='markdown-container'>
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

interface markdownFieldProps {
  displayName: string;
  field: string;
}
