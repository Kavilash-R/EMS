import React, { Component } from "react";

class AddEmployeeButton extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
        onClick={this.handleClick}
      >
        Add Employee
      </button>
    );
  }
}

export default AddEmployeeButton;
