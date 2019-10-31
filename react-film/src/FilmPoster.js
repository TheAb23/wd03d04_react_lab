import React, { Component } from "react";
export default class FilmPoster extends Component {
  posterPath = `https://image.tmdb.org/t/p/w500${this.props.filmPoster}`;
  render() {
    return (
      <div>
        <img src={this.posterPath} alt="" />
      </div>
    );
  }
}