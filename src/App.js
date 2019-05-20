import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.setState({
        items: [...this.state.items, this.state.input],
        input: ""
      });
    }
  };

  deleteItem = key => {
    this.setState({
      items: this.state.items.filter((el, i) => {
        return i !== key;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          handleInput={this.handleInput}
          input={this.state.input}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
