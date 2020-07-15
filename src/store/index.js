import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware();

export let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

export function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(),
        preloadedState,
        compose(applyMiddleware(...middleware))
    );
    
    sagaMiddleware.run(rootSaga);
    return store;
}