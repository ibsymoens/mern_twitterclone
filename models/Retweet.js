import mongoose from "mongoose";

const retweetSchema = mongoose.Schema({
    tweetByUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tweetByUserName: {
        type: String
    },
    tweetByUserImg: {
        type: String
    },
    retweetByUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    retweetByUserImg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    retweetByUserName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tweetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet"
    },
    tweet: {
        type: String  
    },
    tweetImg: {
        type: String
    },
    share: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    retweetCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model("retweet", retweetSchema);