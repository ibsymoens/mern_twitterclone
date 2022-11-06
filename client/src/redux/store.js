import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import tweetReducer from "./features/tweet";

const store = configureStore({
    reducer: {
        auth: authReducer,
        tweet: tweetReducer
    }
});

export default store;