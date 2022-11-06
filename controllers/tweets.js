import dataHandlers from "../commons/dataHandlers.js";
const model = "Tweet";

export const createTweet = async (req, res) => {
    console.log("#####################################tweet#####################################");
    try {
        const userInfo = await dataHandlers.getData({ model: "User", object: { _id: req.userId }});
        const obj = {
            userId: userInfo._id,
            userName: userInfo.name,
            userSearchName: `@${userInfo.email.slice(0, userInfo.email.indexOf("@"))}`,
            userImg: userInfo.displayProfile,
            tweet: req.body.data.tweet,
            tweetImg: req.body.data.tweetImg
        }
        const tweet = await dataHandlers.createData({model, object: obj});
        res.status(200).json(tweet);
    } catch(err) {
        res.status(401).json({message: err.message});
    }
}

export const fetchTweets = async (req, res) => {
    console.log("#################################fetch tweets#################################");
    try {
        const tweets = await dataHandlers.getData({model, object: ""});
        res.status(200).json(tweets);
    } catch(err) {
        res.status(401).json({ message: "Unauthorized." });
    }
}

export const retweet = async (req, res) => {
    console.log("#####################################retweet#####################################");
    try {
        res.status(200).json({message: "Success."});
    } catch(err) {
        res.status(401).json({message: "Unauthorized."});
    }
}

export const likeTweet = async (req, res) => {
    console.log("#####################################like_tweet#####################################");
    const { email, tweetId, isLiked } = req.body.data;
    try {
        if(isLiked)
            await dataHandlers.updateData({ model, conditions: {_id: tweetId}, newModel: {$push: {like: email}}});
        else
            await dataHandlers.updateData({ model, conditions: {_id: tweetId}, newModel: {$pull: {like: email}}});
        const tweet = await dataHandlers.getData({ model, object: { _id: tweetId }});
        res.status(200).json(tweet);
    } catch(err) {
        res.status(401).json({message: err.message});
    }
}

export const editTweet = async (req, res) => {
    console.log("#####################################edit_tweet#####################################");
    try {
        res.status(200).json({message: "Success."});
    } catch(err) {
        res.status(401).json({message: "Unauthorized."});
    }
}

export const undoRetweet = async (req, res) => {
    console.log("#####################################undo_retweet#####################################");
    try {
        res.status(200).json({message: "Success."});
    } catch(err) {
        res.status(401).json({message: "Unauthorized."});
    }
}

export const deleteTweet = async (req, res) => {
    console.log("#####################################delete#####################################");
    const { id } = req.params;
    try {
        await dataHandlers.deleteData({model, object: { _id: id }});
        res.status(201).json({message: "Successfully deleted."});
    } catch(err) {
        res.status(401).json({message: "Unauthorized."})
    }
}