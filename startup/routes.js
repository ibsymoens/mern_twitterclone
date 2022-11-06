import express from "express";
import users from "../routes/users.js";
import tweets from "../routes/tweets.js";

const app = express();

app.use("/users", users);
app.use("/tweets", tweets);

export default app;