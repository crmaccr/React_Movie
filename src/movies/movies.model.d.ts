import { actorCreationDTO, actorMovieDTO } from "../actors/actor.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genreIds?: number[];
  theaterIds?: number[];
  actors?: actorMovieDTO[];
}
export interface movieLandingPage {
  movies?: movieDTO[];
  upcoming?: movieDTO[];
}
