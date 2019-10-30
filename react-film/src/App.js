import React, { Component } from "react";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import "./normalize.css";
import "./index.css";

import TMDB from "./TMDB";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleDetailsClick = film => {
    console.log(`Fetching details for ${film}`);
  };
  handleFaveToggle = film => {
    const faves = this.state.faves.slice();

    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      console.log(`removing ${film.title} to the array`);
      faves.splice(faves.indexOf(film), 1);
    } else {
      console.log(`adding ${film.title} to the array`);
      faves.push(film);
    }
    this.setState({ faves });
  };

  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
          />
        </div>
        <FilmDetails current={this.state.current} />
      </div>
    );
  }
}

export default App;
