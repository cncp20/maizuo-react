import React, {
	Component
} from "react";
import {
	Link
} from "react-router";
import {
	connect
} from "react-redux";
import MovieList from "./MovieList";


import { bindActionCreators } from "redux";
import * as action from "../../store/action";

class Movie extends Component {
	constructor() {
		super();
		this.state = {
			nowData: [],
			nowPg: 1
		}
		this.sc = this.sc.bind(this);
	}
	componentDidMount() {
		let { tabNow, tabComing } = this.props.actions;
		if (this.props.router.location.pathname == "/movie/coming-soon") {
			tabComing()
		} else {
			tabNow()
		}
	}
	sc() {
		let { isNow, nowPage, comingPage } = this.props;
		let { getMoreNow, changeNowPage, getMoreComing, changeComingPage } = this.props.actions;
		let el = this.refs.el;
		if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
			if (isNow) {
				if (nowPage >= 5 ) return;
				getMoreNow(nowPage + 1);
				changeNowPage(nowPage + 1);
			} else {
				if (comingPage >= 5 ) return;
				getMoreComing(comingPage + 1);
				changeComingPage(comingPage + 1);
			}

		}
	}
	render() {
		let nowData = this.state.nowData;
		let { isNow } = this.props;
		let { tabNow, tabComing } = this.props.actions;
		return (
			<div className="movie" ref="el" onScroll={this.sc}>
				<p className="movie-tab">
					<Link to="/movie/now-playing" activeClassName="active" onClick={!isNow ? tabNow : null}>正在热映</Link>
					<Link to="/movie/coming-soon" activeClassName="active" onClick={isNow ? tabComing : null}>即将上映</Link>
				</p>
				{
					/*this.props.children && React.cloneElement(this.props.children, {tab:this.state.tab })*/
				}
				< MovieList></MovieList>

			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		isNow: state.isNow,
		nowPage: state.nowPage,
		comingPage: state.comingPage
	}
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		tabNow:() => {
// 			dispatch({
// 				type:"TAB_NOW"
// 			});
// 		},
// 		tabComing:() => {
// 			dispatch({
// 				type:"TAB_COMING"
// 			});
// 		}
// 	}
// }
const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(action, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);