import React, { Component } from "react";

export default class FilmPoster extends Component {
  // posterPath = `https://image.tmdb.org/t/p/w500 ${this.props.posterPath}`;
  render() {
    return (
      <div>
        <img src={this.poster_path} alt="" />
      </div>
    );
  }
}