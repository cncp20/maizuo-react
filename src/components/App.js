import React from "react";
import "../css/app.scss";
import Nav from "./Nav";
import TopBar from "./TopBar";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
    	let {navShow} = this.props;
        return (
            <div className="app">
            	<TopBar></TopBar>
                {navShow ? <Nav></Nav> : ""}
                {this.props.children}
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

    }
}
export default connect(mapState,mapDispatch)(App);
