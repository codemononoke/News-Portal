// src/redux/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./newsSlice";

// Configuration for persisting the redux state
const persistConfig = {
  key: "root",
  version: 1,
  storage, // use local storage to persist store
};

// Combine multiple reducers into one root reducer
const rootReducer = combineReducers({
  news: newsReducer, // Reducer for handling news-related state
});

// Create a persisted reducer with the persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // use the persisted reducer in the store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignore specific Redux-Persist actions in serializable check
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor to manage the store persistance
export const persistor = persistStore(store);
