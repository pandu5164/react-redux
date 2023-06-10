import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import './App.css';
import CounterReducer from "./store/reducers/CounterReducer";
// import createRootReducer from "./store/reducers";
import CounterComponent from "./components/CounterComponent";

export const history = createBrowserHistory();
const logAction = store => { // custom function to applyMiddleware - alternate of thunk
  return next => {
    return action => {
      const result = next(action);
      console.log('LogActionResult', result);
      return result;
    }
  }
}

const middlwware = [
  logAction,
  thunk
];

const store = createStore(CounterReducer, compose(applyMiddleware(...middlwware))); //(createRootReducer(history), applyMiddleware(logAction))

function App() {
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */} {/* it is used to {routes} as children */}
        How to setup redux store in react
        <CounterComponent />
      {/* </ConnectedRouter> */}
    </Provider>
  );
}

export default App;
