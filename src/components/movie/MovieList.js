import React from "react";
import MovieItem from "./MoveItem";
import { connect } from "react-redux";

class MovieList extends React.Component {
	render() {
		let { isNow, nowList, comingList} = this.props;
		return (
			<div>
				{
                    isNow ? nowList.map((item, index) => {
                        return <div key={index} ><MovieItem film={item}></MovieItem></div>
                    }) : comingList.map((item, index) => {
                        return <div key={index} ><MovieItem film={item}></MovieItem></div>
                    })
                }
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		isNow: state.isNow,
		nowList: state.nowList,
		comingList: state.comingList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);