import React from "react";
//const List = props.items.map(item => <li key={item.toString()}>{item}</li>);

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default List;
