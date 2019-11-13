import React, { Component } from "react";

export default class Fave extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    var handleClick = e => {
      console.log("handling Fave click!");
      e.stopPropagation();
      this.props.onFaveToggle();
      
    };

    return (
      <div
        className={
          "film-row-fave" +
          (this.props.isFave ? " remove_from_queue" : " add_to_queue")
        }
        onClick={handleClick}
      >
        <p className="material-icons">
          {this.props.isFave ? " remove_from_queue" : " add_to_queue"}
        </p>
      </div>
    );
  }
}