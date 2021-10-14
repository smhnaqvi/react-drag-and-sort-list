import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "../../store/ListStore";
import "./style.scss";
import moment from "moment";

import useList from "../../store/List.Hook";

const ListComponent = () => {
  const { get, save } = useList();
  function moveArrayItem(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    save(arr);
  }

  return (
    <DragDropContext
      onDragEnd={(params) => {
        const oldPositionIndex = params.source.index;
        const newPositionIndex = params.destination.index;
        moveArrayItem(get(), oldPositionIndex, newPositionIndex);
      }}
    >
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, _) => (
          <div
            className="list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {get().map((item, i) => (
              <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <ListItem
                      data={item}
                      dragSnapShot={snapshot}
                      dragProvided={provided}
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

const ListItem = ({ data, dragSnapShot, dragProvided }) => {
  return (
    <div
      style={{
        boxShadow: dragSnapShot.isDragging
          ? "0px 0px 25px 2px rgb(0 0 0 / 50%)"
          : ""
      }}
      className={"item"}
      {...dragProvided.dragHandleProps}
    >
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
