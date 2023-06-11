const initialState = {
  count: 0,
  loading: false,
  data: []
}

const CounterReducer = (state = initialState, action) => {
  let tempState = { ...state };
  switch (action.type) {
    case "ADD":
      tempState.count = state.count + action.value; // u can read dynamic value instead of 1, which u can read via action as action.value(needs to be passed at calling function though)
      tempState.loading = false;
      break;
    case "SUB":
      tempState.count = state.count - action.value;
      break;
    case "LOADING":
      tempState.loading = true;
      break;
    case "APIDATA":
      tempState.data = action.value;
      tempState.loading = false;
      break;
    default:
      return tempState;
  }
  return tempState;
}
export default CounterReducer;
