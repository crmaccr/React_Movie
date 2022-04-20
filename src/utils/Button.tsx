import React, { MouseEventHandler } from "react";

export default function Button(props: buttonProps) {
  return (
    <button
      className='btn btn-primary'
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}{" "}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "button";
  disabled: boolean;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
