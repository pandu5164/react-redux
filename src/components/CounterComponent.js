import { connect } from "react-redux";
import { Link } from "react-router-dom"; // Navigate
import * as actionCreator from "../store/actions/CounterActions";
import logo from "../logo.svg";
const CounterComponent = ({ counterState, add, sub, makeApiCall }) => {
    console.log("counterState reducer object", counterState);
    return (<>
        <h1 style={{ margin: 10 }}>Count = {counterState.count > 0 ? counterState.count : <span style={{ color: "red" }}>Please click on add button first</span>}</h1>
        <br />
        <button style={{ margin: 10 }} onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <br />
        <br />
        <div>
            <button style={{ margin: 10 }} onClick={makeApiCall}>Make api call</button>
        </div>
        <br />
        <div>
            {counterState.loading && <img src={logo} alt="loading..." className="App-logo" />}
        </div>
        <br />
        {counterState.data.length > 0 && <Link style={{ margin: 10 }} to={`/display/${counterState.count}`} relative="path">Navigate to api response page</Link>}
    </>)
}
const mapStateToProps = state => {
    return {
        counterState: state.CounterReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(actionCreator.add(1)), // u can pass value also along with type Ex:- dispatch({type: "ADD", value: 1}),
        sub: () => dispatch(actionCreator.sub(1)),
        makeApiCall: () => dispatch(actionCreator.makeApiCall())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);