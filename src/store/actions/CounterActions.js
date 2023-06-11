export const loading = () => {
    return { type: 'LOADING' };
}
export const addAsync = (val) => {
    return { type: "ADD", value: val };
}
export const add = val => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(addAsync(val));
        }, 1000);
    }
}
export const sub = (val) => {
    return { type: "SUB", value: val };
}

export const processsApiResponse = (response) => {
    return { type: "APIDATA", value: response };
}

export const makeApiCall = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    return async (dispatch) => {
        dispatch(loading());
        await fetch(url, {
            header: {},
            method: "GET",
            body: null
        }).then((response) => {
            const responseBody = response.json();
            return responseBody;
        }).then((responseBody) => {
            dispatch(processsApiResponse(JSON.parse(JSON.stringify(responseBody))));
        }).catch((err) => {
            console.log("api call error is", err);
            throw err;
        });
    }
}