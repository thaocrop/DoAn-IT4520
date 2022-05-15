import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import appReducer from "./auth";
import authReducer from "./auth";
import userReducer from "./user";
import configReducer from "./config";
// const persistConfig = {
//     key: "root",
//     storage,
// };

// const authPersistedReducer = persistReducer(persistConfig, appReducer);
export * from "./auth";
export * from "./user";
export * from "./config";

const productReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    config: configReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    if (action.type === "RESET") {
        // reset state
        state = {} as RootState;
        // reset local storage
        localStorage.clear();
    }
    return productReducer(state, action);
};
export default rootReducer;
