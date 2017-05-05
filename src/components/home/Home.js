import React from "react";
import ReactDom from "react-dom";
import Item from "./Item";
import Slider from "./Slider";
import { Link } from "react-router";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            banner: [],
            nowPlaying: [],
            comingSoon: []
        }
    }
    render() {
        let nowPlaying = this.state.nowPlaying;
        let comingSoon = this.state.comingSoon;
        return (
            <div className="home">
                {this.state.banner.length !== 0 ? <Slider banner={this.state.banner}></Slider> : ""}
                {nowPlaying.length !== 0 ? <div className="now-play">
                    {
                        nowPlaying.map((item, index) => {
                            return <Item film={nowPlaying[index]} key={index}></Item>
                        })
                    }
                    <Link to="movie/now-playing">更多热映电影</Link>
                </div> : ""}

                {comingSoon.length !== 0 ? <div className="coming-soon">
                    <div className="line"><p></p><span>即将上映</span><p></p></div>
                    {
                        comingSoon.map((item, index) => {
                            return <Item film={comingSoon[index]} key={index}></Item>
                        })
                    }
                    <Link to="movie/coming-soon">更多即将上映电影</Link>
                </div> : ""}
            </div>
        );
    }
    componentDidMount() {
        var mySwipe = new Swipe(document.getElementById("banner"), {
            auto: 2000,
            continuous: true,
            stopPropation: true
        });
        fetch("/src/data/banner.json").then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("error");
            }
        }).then((data) => {
            this.setState({
                banner: data.data.billboards
            })
            fetch("/src/data/now-playing.json").then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        this.setState({
                            nowPlaying: data.data.films
                        })
                    });
                } else {
                    console.log("error");
                }
            });
            fetch("/src/data/coming-soon.json").then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        this.setState({
                            comingSoon: data.data.films
                        })
                    });
                } else {
                    console.log("error");
                }
            });
        })
    }
}

export default Home;