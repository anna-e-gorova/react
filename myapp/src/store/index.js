import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
//import createSagagMiddleware from 'redux-saga';
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./message/reducer";
import { articlesReducer } from "./articles/reducer";
import thunk from 'redux-thunk';
// import { messageSaga } from "./message/saga";

const persistConfig = {
  key: 'GB-messenger',
  storage,
}

const rootReducer = combineReducers({
  message: messageReducer,
  chats: chatsReducer,
  profile: profileReducer,
  articles: articlesReducer,
});

//const sagaMiddleware = createSagagMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  //composeEnhancers(applyMiddleware(sagaMiddleware))
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

// sagaMiddleware.run(messageSaga);