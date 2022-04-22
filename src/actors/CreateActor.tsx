import React from "react";
import ActorForm from "./ActorForm";

export default function CreateActor() {
  return (
    <>
      <div>Create Actor</div>
      <ActorForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
