import React,{Component} from "react";
import CinemaItem from "./CinemaItem";

class Cinema extends Component {
    constructor() {
        super();
        this.state = {
            cinemas:[]
        };
    }
    componentDidMount() {
        fetch("/src/data/cinema.json").then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    this.setState({
                        cinemas: data.data.cinemas
                    })
                })
            }else {
                console.log("error");
            }
        })
    }
    
    render() {
        let cinemas = this.state.cinemas;
        return (
            <div className="cinema">
                {cinemas.length !== 0 ? cinemas.map((item , index) => {
                    return <CinemaItem key={index} cinema={item}></CinemaItem>
                }): ""}
            </div>
        )
    }

}

export default Cinema;