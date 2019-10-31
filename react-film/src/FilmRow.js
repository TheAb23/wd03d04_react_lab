import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  handleDetailsClick = film => {
    console.log(`Fetching details for ${film}`);
  };
  render() {
    console.log(this.props.filmPoster)
    return (
      <div className="film-row" onClick={this.handleDetailsClick}>
        <FilmPoster filmPoster={this.props.filmPoster} />

        <div className="film-summary">
          <h1>{this.props.filmTitle}</h1>
          <p>{this.props.filmDate}</p>
          <Fave />
        </div>
      </div>
    );
  }
}