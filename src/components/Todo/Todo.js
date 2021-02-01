import React from "react";
import TodoItem from "components/TodoItem/TodoItem";

class Todo extends React.Component {
  state = {
    elements: [
      { id: 1, isCompleted: true, title: "go shop" },
      { id: 2, isCompleted: true, title: "feed the dog" },
      { id: 3, isCompleted: false, title: "water the plants" },
    ],
    inputValue: "",
  };

  markCompleted(id) {
    const index = this.state.elements.findIndex((x) => x.id === id);
    const newElements = this.state.elements;
    newElements[index].isCompleted = !this.state.elements[index].isCompleted;
    this.setState({ elements: newElements });
  }

  addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000) + 10,
      title: this.state.inputValue,
    };
    const newElements = [item, ...this.state.elements];
    this.setState({ elements: newElements });
    this.setState({ inputValue: "" });
  }

  inputHandler(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log(this);
      this.addItem();
    }
  }

  render() {
    const elements = this.state.elements.map((item) => {
      return (
        <TodoItem element={item} markClicked={this.markCompleted.bind(this)} />
      );
    });

    return (
      <div class="main">
        <h2>Todo List</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.inputHandler.bind(this)}
          onKeyUp={this.handleKeyPress.bind(this)}
        />
        <button onClick={this.addItem.bind(this)}>Add</button>
        {elements}
      </div>
    );
  }
}

export default Todo;
