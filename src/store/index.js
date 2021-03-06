import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import createEncryptor from 'redux-persist-transform-encrypt'
import expireIn from "redux-persist-transform-expire-in";

const encryptor = createEncryptor({
    secretKey: 'cureDapp',
    onError: function (error) {
        console.log("Error", error.message);
    }
})


const sagaMiddleware = createSagaMiddleware();

export let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const expiresIn = 3600000; // expire in 48h
const expirationKey = "login";

const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [encryptor, expireIn(expiresIn, expirationKey, [])],
    whitelist: [
        'login'
    ],
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const reducers = rootReducer();

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
export { store, persistor, sagaMiddleware };