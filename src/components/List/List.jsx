import react from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "../../store/ListStore";
import "./style.scss";
import moment from "moment";

const ListComponent = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, _) => (
          <div
            className="list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {List.get().map((item, i) => (
              <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <ListItem
                      data={item}
                      dragHandler={provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const ListItem = ({ data, dragHandler }) => {
  return (
    <div className={"item"} {...dragHandler}>
      <img className={"icon"} src={data.icon} alt={data.title} />
      <div className={"item-details"}>
        <h5 className={"title"}>{data.title}</h5>
        <h5 className={"description"}>{data.description}</h5>
        <h5 className={"create-time"}>{moment(data.created_at).fromNow()}</h5>
      </div>
    </div>
  );
};

export default ListComponent;
