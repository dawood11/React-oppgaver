import { AuthSliceType } from "./auth.types";
import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthSliceType = {
    value: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {state.value = true},
        logout: (state) => {state.value = false},
    },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.value

export default authSlice.reducer