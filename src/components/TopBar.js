import React from "react";
import {connect} from "react-redux";

class TopBar extends React.Component {
	render() {
		let {toggleNav} = this.props;
		return (
			<div className="top-bar">
				<i className="iconfont icon-menu" onClick={toggleNav}></i>
				<p>电影</p>
				<i className="iconfont icon-my"></i>
			</div>
		);
	}
}
const mapState = (state) => {
	return {
		
	}
}
const mapDispatch = (dispatch) => {
	return {
		toggleNav: () => {
			dispatch({
				type:"TOGGLE_NAV"
			})
		}
	}
}

export default connect(mapState,mapDispatch)(TopBar);