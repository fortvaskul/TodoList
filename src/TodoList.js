import React, { Component } from "react";
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Enter the task."
              value={this.props.input}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;
