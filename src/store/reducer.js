import defaultState from "./state";
const reducer = (state = defaultState, action) => {
	let {
		type,
		payload
	} = action;
	switch (type) {
		case "TOGGLE_NAV":
			if (state.navShow) {
				return Object.assign({}, state, {
					navShow: false
				});
			} else {
				return Object.assign({}, state, {
					navShow: true
				});
			}
			break;
		case "TAB_NOW":
			return Object.assign({}, state, {
				isNow: true,
				isComing: false
			});
			break;
		case "TAB_COMING":
			return Object.assign({}, state, {
				isNow: false,
				isComing: true
			});
			break;
		case "GET_NOW":
			return Object.assign({}, state, {
				nowList:payload
			});
			break;
		case "GET_COMING":
			return Object.assign({}, state, {
				comingList: payload
			});
			break;
		case "GET_MORE_NOW":
			return Object.assign({}, state, {
				nowList:state.nowList.concat(payload)
			});
			break;
		case "CHANGE_NOW_PAGE":
			return Object.assign({}, state, {
				nowPage:payload
			});
			break;
		case "GET_MORE_COMING":
			return Object.assign({}, state, {
				comingList: state.comingList.concat(payload)
			});
			break;
		case "CHANGE_COMING_PAGE":
			return Object.assign({}, state, {
				comingPage:payload
			});
			break;
		default:
			return state;
			break;
	}
}

export default reducer;