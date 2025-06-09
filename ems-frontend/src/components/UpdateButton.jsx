import React, { Component } from "react";

class UpdateButton extends Component {
  handleClick = () => {
    // call the passed onClick prop if provided
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <button
        className="bg-green-700 hover:bg-green-800 text-white px-2 py-1 rounded"
        onClick={this.handleClick}
      >
        Update
      </button>
    );
  }
}

export default UpdateButton;
