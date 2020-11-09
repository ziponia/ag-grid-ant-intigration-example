import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(combineReducers({}), middlewares);

sagaMiddleware.run(rootSaga);

export default store;
