import React, { Component } from "react";

export const Context = React.createContext();

export class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [<div>Element 1</div>, <div>Element 2</div>, <div>Element 3</div>],
    };
  }

  //create
  createTodo() {}
  //read
  readTodos() {}
  //update
  updateTodo() {}
  //delete
  deleteTodo() {}
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          createTodo: this.createTodo.bind(this),
          createTodo: this.readTodos.bind(this),
          createTodo: this.updateTodo.bind(this),
          createTodo: this.deleteTodo.bind(this),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
