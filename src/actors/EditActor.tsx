import React from "react";
import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>EditActor</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-05-19T00:00:00"),
          pictureURL:
            "https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
