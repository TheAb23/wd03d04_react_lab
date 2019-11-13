import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor() {
    super();

    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = filter => {
    console.log("handleFilterClick");
    this.setState({ filter: filter });
  };
  render() {
    const faveList=this.props.films.filter((film)=>{
      return this.props.faves.includes(film);
    })
    const show=this.state.filter==='all'?this.props.films:faveList;
    return (
      <div>
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {show.map(item => (
            <FilmRow
              film={item}
              title={item.title}
              date={item.release_date.split("-")[0]}
              key={item.id}
              poster={item.poster_path}
              onFaveToggle={()=>this.props.onFaveToggle(item)}
              isFave={this.props.faves.includes(item)}
              onDetailsClick={this.props.onDetailsClick}
            />
          ))}

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
        </div>

      </div>
    );
  }
}