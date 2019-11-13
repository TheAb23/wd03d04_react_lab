import React, { Component } from 'react'
import './App.css';
import TMDB from './TMDB'
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails';

export default class App extends Component {

  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.state = {
      films: TMDB.films,
      faves:[],
      current:{}
    }
  }
  
  handleFaveToggle(film){
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if(filmIndex<0){
    faves.push(film);
    console.log(`Adding ${film.title} to faves...`)
    }
    else{
      faves.splice(filmIndex, 1) 
      console.log(`Removing ${film.title} to faves...`)
    }
    this.setState({faves});
  }

  handleDetailsClick = (film) =>{
    console.log("Fetching details for "+film.title)
    this.setState({current:film});
}

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={this.state.films} 
          faves={this.state.faves} 
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
          />

         <FilmDetails films={this.state.current}/>
        </div>
      </div>
    )
  }
}

