import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
    
    constructor (props){
        super(props)
        this.state= {filter:'all'}
    }
    
    handleFilterClick = (fil)=>{
        console.log("Setting filter to "+fil)
        this.setState({
            filter:fil
        })
    }

    render() {
        var allFilms = this.props.films.map(film => 
         <FilmRow films ={film} 
         key={film.id} 
         onFaveToggle={() => this.props.onFaveToggle(film)}
            isFave= {this.props.faves.includes(film) }
        handleDetailsClick ={() => this.props.handleDetailsClick(film)}
        />)
        
        var faveFilms = this.props.faves.map(film=><FilmRow films ={film} 
            key={film.id} 
            onFaveToggle={() => this.props.onFaveToggle(film)}
               isFave= {this.props.faves.includes(film) }
           handleDetailsClick ={() => this.props.handleDetailsClick(film)}
           />)
        
        return (
            <div className="film-list"  >
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}onClick={() => this.handleFilterClick('faves')} >
                    FAVES
                    <span className="section-count">{this.props.faves.length}</span>
                </div>
            </div>
            {this.state.filter === 'all'? allFilms : faveFilms}
           
        </div>
        )
    }
}