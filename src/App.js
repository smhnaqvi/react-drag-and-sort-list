import React from "react";
import AddToList from "./components/List/AddToList";
import ListComponent from "./components/List/List";
import { ListProvider } from "./store/ListStore";

import "./style.scss";

export default function App() {
  return (
    <div className={"container"}>
      <h5 className="pageTitle">list</h5>
      <ListProvider>
        {/* add to list modal */}
        <AddToList />

        {/* show job list  */}
        <ListComponent />
      </ListProvider>
    </div>
  );
}
