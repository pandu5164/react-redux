import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import './App.css';
import routes from "./routes";
import createRootReducer from "./store/reducers";

export const history = createBrowserHistory();
export const myRouterMiddlwWare = routerMiddleware(history);
const logAction = store => { // custom function to applyMiddleware - alternate of thunk
  return next => {
    return action => {
      const result = next(action);
      console.log('LogActionResult', result);
      return result;
    }
  }
}

const middlewware = [
  thunk,
  myRouterMiddlwWare,
  logAction
];

const store = createStore(createRootReducer(history), {}, compose(applyMiddleware(...middlewware))); //(createRootReducer(history), applyMiddleware(logAction))

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}> {/* it is used to {routes} as children */}
        {routes}
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
