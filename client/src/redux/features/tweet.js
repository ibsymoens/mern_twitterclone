import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tweet: []   
}

export const tweetSlice = createSlice({
    name: "tweet",
    initialState,
    reducers: {
        create_tweet: (state, action) => {
            return {...state, tweet: [action.payload, ...state.tweet]}
        },
        fetch_tweets: (state, action) => {
            state.tweet = action.payload;
        },
        likecount_tweet: (state, action) => {
            let tweets = state.tweet.filter(tweet => tweet._id !== action.payload._id);
            return {...tweets, tweet: [action.payload, ...tweets]}
        },
        delete_tweet: (state, action) => {
            return {...state, tweet: state.tweet.filter(tweet => tweet._id !== action.payload)}
        }
    }
});

export const { create_tweet, fetch_tweets, likecount_tweet, delete_tweet } = tweetSlice.actions;
export default tweetSlice.reducer;