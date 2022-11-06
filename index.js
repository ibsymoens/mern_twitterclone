import env from "dotenv";
env.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./startup/routes.js";

const app = express();

// built-in middlewares
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb', extended: true }));
app.use(cors());

// routes
app.use(routes);

const PORT = process.env.PORT || 8001;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT), () => console.log(`Server running on port ${PORT}`))
        .catch((err) => console.log(err.message));