import { getData } from "../commons/dataHandlers.js";

const  verifyApiKey = async (req, res, next) => {
    console.log("#################################middleware - verifyApiKey#################################");
    const apiKey = req.header('Api-Key');
    if(!apiKey) return res.status(400).json({ message: "API key is required." });

    const result = await getData('ApiKey', { key: apiKey });
    if(!result) {
        res.status(400).json({ message: "Invalid API key." });
        return;
    }
    next();
}

export default verifyApiKey;