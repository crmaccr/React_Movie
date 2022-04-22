import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieCreationDTO, movieDTO } from "./movies.model";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelector";

import { genreDTO } from "../genres/genres.model";
import {
  movieTheaterCreationDTO,
  movieTheaterDTO,
} from "../movietheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorMovieDTO } from "../actors/actor.model";
export default function MovieForm(props: movieFormProps) {
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres)
  );

  const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(
    mapToModel(props.selectedMovieTheaters)
  );
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(
    mapToModel(props.nonSelectedMovieTheaters)
  );

  const [selectedActors, setSelectedActors] = useState(props.selectedActors);
  function mapToModel(
    items: { id: number; name: string }[]
  ): multipleSelectorModel[] {
    return items.map((item) => ({ key: item.id, value: item.name }));
  }
  return (
    <Formik
      onSubmit={(values, actions) => {
        values.genreIds = selectedGenres.map((item) => item.key);

        values.theaterIds = selectedMovieTheaters.map((item) => item.key);
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

          <MultipleSelector
            displayName='Movie Theaters'
            nonSelected={nonSelectedMovieTheaters}
            selected={selectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected);
              setNonSelectedMovieTheaters(nonSelected);
            }}
          />
          <TypeAheadActors
            displayName='actors'
            actors={selectedActors}
            onAdd={(actors) => {
              setSelectedActors(actors);
            }}
            onRemove={(deselected) => {
              setSelectedActors((actors) =>
                actors.filter((actor) => actor !== deselected)
              );
            }}
            listUI={(actor: actorMovieDTO) => {
              return (
                <>
                  {actor.name} /{" "}
                  <input
                    placeholder='Character'
                    type='text'
                    value={actor.character}
                    onChange={(e) => {
                      const index = selectedActors.findIndex(
                        (x) => x.id === actor.id
                      );
                      const actors = [...selectedActors];
                      actors[index].character = e.currentTarget.value;
                      setSelectedActors(actors);
                    }}
                  />
                </>
              );
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
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheaters: movieTheaterDTO[];
  selectedActors: actorMovieDTO[];

  onSubmit(
    values: movieCreationDTO,
    formikHelpers: FormikHelpers<movieCreationDTO>
  ): void;
}
