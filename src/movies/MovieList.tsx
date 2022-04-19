import React from "react";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import "./MovieList.css";
import GenericList from "../utils/GenericList";

export default function MovieList(props: moviesListProps) {
  return (
    <GenericList list={props.movies}>
      <div className='list-row'>
        {props.movies?.map((movie) => (
          <IndividualMovie key={movie.id} {...movie} />
        ))}
      </div>
    </GenericList>
  );
}

interface moviesListProps {
  movies?: movieDTO[];
}
