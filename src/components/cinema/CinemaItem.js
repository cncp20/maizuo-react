import React from "react";

class CinemaItem extends React.Component {
    render() {
        let cinema = this.props.cinema;
        return (
            <div className="cinema-item">
                <h1>{cinema.name}</h1>
                <div className="labels">
                    {cinema.labels.map((item, index) => {
                        return <span key={index}>{item.name}</span>
                    })}
                </div>
                <p>{cinema.address}</p>
            </div>
        );
    }
}

export default CinemaItem;