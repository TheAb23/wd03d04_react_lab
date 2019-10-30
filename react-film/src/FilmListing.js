import React from "react";
import FilmRow from "./FilmRow";
import { Component } from "react";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }
  handleFilterClick = filter => {
    this.setState ({
      filter: filter
    });
    console.log(filter);
  };
  render() {
    let allFilms = this.props.db.map((film, index) => (
      <FilmRow
        filmTitle={film.title}
        filmId={film.id}
        filmDate={new Date().getFullYear(film.release_date)}
        filmPoster={film.poster_path}
      />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.db.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}