import react from "react";
import ListComponent from "./components/List/List";
import "./style.scss";

export default function App() {
  return (
    <div className={"container"}>
      <h5 className="pageTitle">list</h5>
      <ListComponent />
    </div>
  );
}
