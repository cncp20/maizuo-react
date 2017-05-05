import React, { Component } from 'react';
class Slider extends Component {
    componentDidMount() {
        var mySwipe = new Swipe(document.getElementById("banner-container"), {
            continuous:true,
            stopPropation:true,
            auto:4000
        })
    }
    render() {
        return (
            <div id="banner-container">
                <ul className="banner">
                    {
                        this.props.banner.map((item, index) => {
                            return <li key={index}><img src={this.props.banner[index].imageUrl} /></li>
                        })
                    }
                </ul>
            </div>

        );
    }
}
export default Slider;