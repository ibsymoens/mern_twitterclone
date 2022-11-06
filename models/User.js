import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    birthdate: {
        type: String
    },
    displayProfile: {
        type: String
    }
}, { timestamps: true });

export default mongoose.model("user", userSchema);