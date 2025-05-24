import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../constants/constants";
import { data } from "../../mock/data";
const initialState={
    list: data
}

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {}
})