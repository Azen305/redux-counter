import { createStore, compose } from "redux";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
);

export default store;