import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelector";

import { genreDTO } from "../genres/genres.model";
export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );
  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((item) => ({ key: item.id, value: item.name }));
  }
  return (
    <Formik
      onSubmit={(values, actions) => {
        values.genreIds = selectedGenres.map((item) => item.key);
        props.onSubmit(values, actions);
      }}
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
          <MultipleSelector
            displayName='Genres'
            nonSelected={nonSelectedGenres}
            selected={selectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />
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
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];

  onSubmit(
    values: movieCreationDTO,
    formikHelpers: FormikHelpers<movieCreationDTO>
  ): void;
}
