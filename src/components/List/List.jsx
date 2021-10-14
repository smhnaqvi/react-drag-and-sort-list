import react from "react";
import List from "../../store/ListStore";

const ListComponent = () => {
  return (
    <div>
      {List.get().map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
};

export default ListComponent;
