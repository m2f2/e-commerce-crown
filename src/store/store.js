import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./rootSaga";

const persistConfig = {
          key: 'root',
          storage,
          whitelist:['cart']
}
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = [process.env.NODE_ENV ==='development' && logger, sagaMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !=='production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers =composeEnhancer(applyMiddleware(...middleWare));
export const store = createStore(persistedReducer, undefined, composeEnhancers ); 
sagaMiddleware.run(rootSaga);
export const persistor =  persistStore(store);