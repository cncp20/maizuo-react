import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router";
import {connect} from "react-redux";

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            navList: [
                { name: '首页', path: "home" },
                { name: '影片', path: "movie" },
                { name: '影院', path: "cinema" },
                { name: '商城', path: "shop" }
            ]
        }
    }
    render() {
        let {toggleNav } = this.props;
        return (
            <div className="nav" onClick={toggleNav}>
                <ul>
                    {this.state.navList.map((item, index) => {
                        return <li key={index}><Link to={item.path}>{item.name}<i className="iconfont icon-right"></i></Link></li>
                    })}
                </ul>
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        navShow: state.navShow
    }
}
const mapDispatch = (dispatch) => {
    return {
        toggleNav: (ev) => {
            dispatch({
                type:"TOGGLE_NAV"
            })
            ev.stopPropagation();
        }
    }
}
export default connect(mapState,mapDispatch)(Nav);