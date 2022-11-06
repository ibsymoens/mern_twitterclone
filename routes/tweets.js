import express from "express";
import * as tweetControllers from "../controllers/tweets.js";
import verifyAuthToken from "../middlewares/verifyAuthToken.js";

const router = express.Router();

router.get("/fetchTweets", tweetControllers.fetchTweets);
router.post("/tweet", verifyAuthToken, tweetControllers.createTweet);
router.post("/retweet", tweetControllers.retweet);
router.patch("/like", verifyAuthToken, tweetControllers.likeTweet);
router.delete("/delete/:id", verifyAuthToken, tweetControllers.deleteTweet);

export default router;