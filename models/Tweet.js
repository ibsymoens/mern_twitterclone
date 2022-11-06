import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    userName: {
        type: String,
        require: true
    },
    userSearchName: {
        type: String,
        require: true
    },
    userImg: {
        type: String
    },
    tweet: {
        type: String,
    },
    tweetImg: {
        type: String
    },
    share: {
        type: Number,
        default: 0
    },
    like: {
        type: [String]
    },
    retweetCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.model("tweet", tweetSchema);