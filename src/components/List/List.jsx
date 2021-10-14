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
      <div className={"item-details"}>
        <img className={"icon"} src={data.icon} alt={data.title} />
        <div className={"item-info"}>
          <h5 className={"title"}>{data.title}</h5>
          <h4 className={"description"}>{data.description}</h4>
          <div className={"sub-info"}>
            <span>{moment(data.created_at).fromNow()} - </span>
            <span>{data.working_type} - </span>
            <span>{data.country}</span>
          </div>
        </div>
      </div>
      <div className={"keywords"}>
        {data.keywords.map((keyword, i) => (
          <span key={i}>{keyword}</span>
        ))}
      </div>
    </div>
  );
};

export default ListComponent;
