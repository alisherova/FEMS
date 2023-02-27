import {combineReducers} from "@reduxjs/toolkit";

/** reducers */
import user from "./user";
import sidebar from "./sidebar/sidebar";

/** Main reducer function */
export default combineReducers({user, sidebar});

/** Export selectors and action functions */
export * from "./user";
export * from "./sidebar/sidebar";
