export const loading = () => {
    return {type: 'LOADING'};
}
export const addAsync = (val) => {
    return {type: "ADD", value: val};
}
export const add = val => {
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(addAsync(val));
        }, 5000);
    }
}
export const sub = (val) => {
    return {type: "SUB", value: val};
}
