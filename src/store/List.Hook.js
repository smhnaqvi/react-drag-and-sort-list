import React from "react";
import ListContext from "./List.Hook";

export default function useList() {
  const list = React.useContext(ListContext);
  if (list === undefined) {
    throw new Error("useList must be used within ListProvider");
  }
  return list;
}
