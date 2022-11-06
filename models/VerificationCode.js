import mongoose from "mongoose";

const verificationCodeSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    verificationCode: {
        type: String,
        require: true
    }
}, { timestamps: true });

export default mongoose.model("verificationCode", verificationCodeSchema);