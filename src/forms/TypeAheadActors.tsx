import React, { ReactElement } from "react";
import { actorMovieDTO } from "../actors/actor.model";
import { Typeahead } from "react-bootstrap-typeahead";

export default function TypeAheadActors(props: typeAheadActorProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Tom Holland",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/800px-Tom_Holland_by_Gage_Skidmore.jpg",
      character: "",
    },
    {
      id: 2,
      name: "Jessic Alba",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/TechCrunch_Disrupt_NY_2016_-_Day_3_%2826884815511%29_%28cropped%29.jpg/220px-TechCrunch_Disrupt_NY_2016_-_Day_3_%2826884815511%29_%28cropped%29.jpg",
      character: "",
    },
    {
      id: 3,
      name: "Emma Watson",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/220px-Emma_Watson_2013.jpg",
      character: "",
    },
  ];
  const selected: actorMovieDTO[] = [];
  return (
    <div className='mb-3'>
      <label>{props.displayName}</label>
      <Typeahead
        id='typeahead'
        onChange={(actors) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
            actors = actors.filter((a) => a.id !== actors[0].id);
          }
          console.log(actors);
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={["name"]}
        placeholder='Write the name of actor'
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              alt='actor'
              src={actor.picture}
              style={{ height: "64px", marginRight: "10px", width: "64px" }}
            />
            <span>{actor.name}</span>
          </>
        )}
      />
      <ul className='list-group'>
        {props.actors.map((actor) => (
          <li key={actor.id} className='list-group-item list-group-item-action'>
            {props.listUI(actor)}
            <span
              className='badge badge-primary badge-pill pointer text-dark'
              style={{ marginLeft: "0.5rem" }}
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface typeAheadActorProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  onRemove(actor: actorMovieDTO): void;
  listUI(actor: actorMovieDTO): ReactElement;
}
