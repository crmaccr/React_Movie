import React, { MouseEventHandler } from "react";

export default function Button(props: buttonProps) {
  return (
    <button
      className={props.className}
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
  className: string;
  disabled: boolean;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary",
};
