import mongoose from "mongoose";

const apiKeySchema = mongoose.Schema({
    apiKey: {
        type: String,
        require: true,
        unique: true
    }
});

export default mongoose.model("apiKey", apiKeySchema);