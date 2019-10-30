import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }
   handleClick = e => {
    e.stopPropagation();
    console.log("handling Fave click!");
    this.setState({
      isFave: !this.state.isFave
    });
  };

  render() {
  
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";

    return (
      <div className={`film-row-fave ${isFave}`}>
        <p className="material-icons" onClick={this.handleClick}>
          {isFave}
        </p>
      </div>
    );
  }
}