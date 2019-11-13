import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {


    handleDetailsClick = (film) =>{
        this.props.handleDetailsClick(film)
    }
    
    render() {
        var year = new Date(this.props.films.release_date);
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.films)}>
            <FilmPoster list={this.props.films} />
            <div className="film-summary">
                <Fave onFaveToggle={() => this.props.onFaveToggle(this.props.films)} isFave={this.props.isFave}/>
                <h1>{this.props.films.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
        </div>
        )
    }
}

