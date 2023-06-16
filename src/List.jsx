import ListItem from "./ListItem";
import React from "react";

const List = ({ list }) => (
  <div className="list-wrapper grid grid-cols-3 gap-[2rem]">
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default List;
