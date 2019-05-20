import React, { Component } from "react";
class TodoItems extends Component {
  render() {
    const items = this.props.entries.map((el, i) => (
      <li key={i} onClick={() => this.props.deleteItem(i)}>
        {el}
      </li>
    ));
    return <ul className="theList">{items}</ul>;
  }
}
export default TodoItems;
