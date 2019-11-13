import React from 'react'

const FilmPoster = (props) => {
    return (
        <div>
            <img src={"https://image.tmdb.org/t/p/w500/"+props.list.poster_path} alt="" />
        </div>
    )
}

export default FilmPoster
