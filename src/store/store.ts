import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof store>;
export type AppDispatch = typeof store.dispatch;
