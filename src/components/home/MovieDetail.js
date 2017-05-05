import React, { Component } from "react";

class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
            film:{}
        }
    }
    componentDidMount() {
        fetch("/src/data/detail.json").then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    this.setState({
                        film:data.data.film
                    })
                })
            }else {
                console.log("error");
            }
        })
    }
    render() {
        let film = this.state.film;
        return (
            !film.name ? <div></div> : <div className="detail">
                <img src={film.cover.origin} />
                <div className="info">
                    <h1>影片简介</h1>
                    <p>导演：{film.director}</p>
                    <p>主演：{film.actors.map((item, index) => {
                            return <span key={index}>{item.name}</span>
                        })}</p>
                    <p>语言：{film.language}</p>
                    <p>类型：{film.category}</p>
                    <p>上映时间：{this.formatDate(film.premiereAt)}</p>
                    <p>{film.synopsis}</p>
                </div>
            </div>
        )
    }
    formatDate(time) {
        let date = new Date(time);
        return (date.getMonth() + 1) + "月" + date.getDate() + "日上映"
    }
}

export default MovieDetail;