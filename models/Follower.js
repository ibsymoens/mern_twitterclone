import mongoose from "mongoose";

const followerSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    userName: {
        type: String
    },
    userImg: {
        type: String
    }
});

export default followerSchema;