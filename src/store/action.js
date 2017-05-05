export function tabNow() {
    return (dispatch) => {
        dispatch({
            type: "TAB_NOW"
        });
        dispatch({
            type: "CHANGE_NOW_PAGE",
            payload: 1
        });
        getData(1, "now-playing", function (data) {
            dispatch({
                type: "GET_NOW",
                payload: data
            })
        });
    }
}

export function tabComing() {
    return (dispatch) => {
        dispatch({
            type: "TAB_COMING"
        });
        dispatch({
            type: "CHANGE_COMING_PAGE",
            payload: 1
        });
        getData(1, "coming-soon", function (data) {
            dispatch({
                type: "GET_COMING",
                payload: data
            })
        });
    }
}

export function getMoreNow(pg) {
    return (dispatch) => {
        getData(pg, "now-playing", function (data) {
            dispatch({
                type: "GET_MORE_NOW",
                payload: data
            })
        });
    }
}
export function changeNowPage(p) {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_NOW_PAGE",
            payload: p
        })
    }
}
export function getMoreComing(pg) {
    return (dispatch) => {
        getData(pg, "coming-soon", function (data) {
            dispatch({
                type: "GET_MORE_COMING",
                payload: data
            })
        });
    }
}
export function changeComingPage(p) {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_COMING_PAGE",
            payload: p
        })
    }
}

function getData(pg, tp, cb) {
    fetch("/src/data/" + tp + "-" + pg + ".json").then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            console.log("error");
        }
    }).then((data) => {
        cb(data.data.films);
    });
}