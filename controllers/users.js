import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import dataHandlers from "../commons/dataHandlers.js";
import sendVerification from "../commons/sendVerification.js";

const model = "User";

export const signup = async (req, res) => {
    console.log("#################################sign up#################################");
    const { name, email, password, month, day, year } = req.body.data;
    try {
        if (await dataHandlers.getData({model, object: { email }})) 
            return res.status(400).json({ message: "User already exists." });
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await dataHandlers.createData({ model, object: {
            name,
            email,
            password: hashedPassword,
            birthdate: `${month} ${day}, ${year}`,
            displayProfile: ""
        }});
        const jwttoken = jwt.sign({ id: result._id }, process.env.ACCESS_TOKEN, { expiresIn: "1h" });
        res.status(201).json(jwttoken);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const signin = async (req, res) => {
    console.log("#################################sign in#################################");
    const { email, password } = req.body.data;
    try {
        const user = await dataHandlers.getData({ model, object: { email }});
        if(!user)
            return res.status(400).json({ message: "Sorry, we could not find your account." });
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).json({ message: "Invalid credentials." }); 
        const jwttoken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, { expiresIn: "1h" });
        res.status(200).json(jwttoken);
    } catch(err) {
        res.status(400).json({ message: "Invalid credentials." });
    }
}

export const signinWithGoogle = async (req, res) => {
    console.log("#################################sign in with google#################################");
    const { name, email, picture } = req.body.data;
    try {
        let jwttoken;
        const user = await dataHandlers.getData({ model, object: { email }});
        if (user) {
            jwttoken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, { expiresIn: "1h" });
        } else {
            const result = await dataHandlers.createData({ model, object: {
                name,
                email,
                displayProfile: picture
            }});

            jwttoken = jwt.sign({ id: result._id }, process.env.ACCESS_TOKEN, { expiresIn: "1h" });
        }
        res.status(200).json(jwttoken);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const checkEmail = async(req, res) => {
    console.log("#################################verify email#################################");
    const { email } = req.body.data;
    try {
        const isTaken = await dataHandlers.getData({ model, object: { email }});
        if(isTaken)
            res.status(200).json({ message: "Email has already been taken." });
        else
            res.status(200).json(isTaken);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const sendVerificationCode = async(req, res) => {
    console.log("#################################email verification code#################################");
    const { email } = req.body.data;
    try {
        const isExists = await dataHandlers.getData({ model: "VerificationCode", object: { email }});
        if(isExists)
            await dataHandlers.deleteData({ model: "VerificationCode", object: { email }});
        const verificationCode = crypto.randomBytes(3).toString("hex").toUpperCase();
        sendVerification(email, verificationCode);
        await dataHandlers.createData({ model: "VerificationCode", object: { email, verificationCode }});
        res.status(201).json({ message: "Verification code sent." });
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const verifyCode = async(req, res) => {
    console.log("#################################verify verification code#################################");
    const { email, verificationCode } = req.body.data;
    try {
        const isVerified = await dataHandlers.getData({ model: "VerificationCode", object: { email, verificationCode }});
        if(isVerified) 
            res.status(201).json(isVerified);
        else
            res.status(201).json(isVerified);
    } catch(err) {
        res.status(400).json({ message: "Invalid." });
    }
}

export const getUserInfo = async (req, res) => {
    console.log("#################################user info#################################");
    try {
        const userInfo = await dataHandlers.getData({ model, object: { _id: req.userId }});
        const obj = {
            name: userInfo.name,
            email: userInfo.email,
            img: userInfo.displayProfile
        }
        res.status(200).json(obj);
    } catch(err) {
        res.status(401).json({ message: "Unauthorized." })
    }
}

export const getSuggestToFollow = async (req, res) => {
    console.log("#####################################user_suggest_to_follow#####################################");
    try {
        const users = await dataHandlers.getData({ model, object: "" });
        let obj = users.map(user => ({name: user.name, email: user.email, img: user.displayProfile}));
        res.status(200).json(obj);
    } catch(err) {
        res.status(401).json({message: "Unauthorized."});
    }
}