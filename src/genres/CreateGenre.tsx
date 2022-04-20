import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  const history = useHistory();
  return (
    <>
      <div>CreateGenre</div>
      <Button
        onClick={() => {
          // saving to database
          history.push("/genres");
        }}
      >
        Save Genre
      </Button>
    </>
  );
}
