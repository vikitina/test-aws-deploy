import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../constants/constants";
import { dataProcess } from "./data-process/data-process.slice";

export const rootReducer = combineReducers({
    [NameSpace.Data]: dataProcess.reducer
})