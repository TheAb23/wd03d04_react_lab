import React from "react";
import FilmRow from "./FilmRow";
import { Component } from "react"
export default class FilmListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
  }
  handleFilterClick = filter => {
    this.setState({
      //es 6 syntax for making a key with the same name as the variable
      filter
    });
    console.log(filter);
  };
  render() {
    const allFilms = this.props.films.map((film, index) => (
      <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
      />
    ));
    const faves = this.props.faves.map((film, index) => (
      <FilmRow
        film={film}
        key={film.id}
        onFaveToggle={() => this.props.onFaveToggle(film)}
        isFave={this.props.faves.includes(film)}
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
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
​
        {this.state.filter === "faves" ? faves : allFilms}
      </div>
    );
  }
}