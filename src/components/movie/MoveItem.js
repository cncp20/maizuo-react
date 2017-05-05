import React from "react";
import {Link} from "react-router";

class MovieItem extends React.Component {
    render() {
        let film = this.props.film;
        return (
            <div className="movie-item">
                <Link to="detail">
                    <img src={film.poster.thumbnail} />
                    <div className="movie-info">
                        <h1>{film.name}<span>{film.grade}</span></h1>
                        <p>{film.intro}</p>
                        <p>{film.cinemaCount}家影院上映 {film.watchCount}人购票</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MovieItem;