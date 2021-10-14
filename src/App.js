import React, { useRef, useState } from "react";
import ListComponent from "./components/List/List";
import ListProvider from "./store/ListStore";
import useList from "./store/List.Hook";

import "./style.scss";

export default function App() {
  // const [list] = useList();

  return (
    <div className={"container"}>
      <h5 className="pageTitle">list</h5>
      {/* <button onClick={handelModal}>Open Modal</button> */}
      {/* <ListProvider.Provider> */}
      {/* show job list  */}
      {/* <ListComponent /> */}
      {/* </ListProvider.Provider> */}
    </div>
  );
}
