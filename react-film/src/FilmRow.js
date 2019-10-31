import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  
  render() {
    return (
      <div className="film-row" onClick={this.handleDetailsClick}>
        <FilmPoster filmPoster={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date().getFullYear(this.props.film.release_date)}</p>
          <Fave
            onFaveToggle={this.props.onFaveToggle}
            isFave={this.props.isFave}
          />
        </div>
      </div>
    );
  }
}