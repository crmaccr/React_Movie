import React, { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: GenericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading />;
  }
  if (props.list.length === 0) {
    if (props.emptyUI) return props.emptyUI;
    else {
      return <div>There are no any elements </div>;
    }
  }
  return props.children;
}

interface GenericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyUI?: ReactElement;
  children: ReactElement;
}
