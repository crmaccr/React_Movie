export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface movieLandingPage {
  movies?: movieDTO[];
  upcoming?: movieDTO[];
}
