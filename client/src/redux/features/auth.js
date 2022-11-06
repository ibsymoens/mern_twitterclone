import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    userInfo: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
        },
        signup: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
        },
        signout: (state) => {
            state.token = null;
            state.userInfo = {};
            localStorage.clear();
            window.location.reload();
        },
        setsessiontoken: (state) => {
            state.token = localStorage.token;
        },
        setuserinfo: (state, action) => {
            state.userInfo = action.payload;
        }
    }
});

export const { signin, signup, signout, setsessiontoken, setuserinfo } = authSlice.actions;
export default authSlice.reducer;