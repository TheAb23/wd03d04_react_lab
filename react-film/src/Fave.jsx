import React, { Component } from "react";
export default class Fave extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    e.stopPropagation();
    console.log("handling Fave click!");
    this.props.onFaveToggle();
  };
  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
​      return (
<div className={`film-row-fave ${isFave}`}>
        <p className="material-icons" onClick={this.handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}