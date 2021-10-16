import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "../../sagas/todoSagas";

const sagaMiddleWare = createSagaMiddleWare();

const middlewares = [sagaMiddleWare];

//개발환경에서 로그만 찍기
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const stroe = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);
export default stroe;
