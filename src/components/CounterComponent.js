import {connect} from "react-redux";
import * as actionCreator from "../store/actions/CounterActions";
import logo from "../logo.svg";
const CounterComponent = ({counterState, add, sub}) => {
    return (<>
    <h1>Count = {counterState.count}</h1>
    <button onClick={add}>Add</button>
    <button onClick={sub}>Sub</button>
    {counterState.loading && <img src={logo} alt="loading..." className="App-logo" />}
    </>)
}
const mapStateToProps = state => {
    return {
        counterState: state
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(actionCreator.add(1)), // u can pass value also along with type Ex:- dispatch({type: "ADD", value: 1}),
        sub: () => dispatch(actionCreator.sub(1)),
    }
}  
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);