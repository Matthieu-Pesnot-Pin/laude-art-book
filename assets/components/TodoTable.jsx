import React, { useContext } from "react";
import { Context } from "./context/Context";

function TodoTable() {
  const context = useContext(Context);
  return <div>{context.todos}</div>;
}

export default TodoTable;
