import React from "react";
import {Link} from "react-router";

class Item extends React.Component {
    render() {
        let film = this.props.film;
        return (
            <div className="home-item">
                <Link to="detail">
                    <img src={film.cover.origin} />
                    {
                        !film.isComingSoon ? <div className="home-info">
                            <h1>{film.name}<span>{film.grade}</span></h1>
                            <p>{film.cinemaCount}家影院上映 {film.watchCount}人购票</p>
                        </div> : <div className="home-info">
                                <h1>{film.name}<span>{this.formatDate(film.premiereAt)}</span></h1>
                            </div>
                    }
                </Link>
            </div>
        );
    }
    formatDate(time) {
        let date = new Date(time);
        return (date.getMonth() + 1) + "月" + date.getDate() + "日上映"
    }
}

export default Item;