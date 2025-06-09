import React, { Component } from "react";

class DeleteButton extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <button
        className="bg-red-700 hover:bg-red-800 text-white px-2 py-1 rounded"
        onClick={this.handleClick}
      >
        Delete
      </button>
    );
  }
}

export default DeleteButton;
