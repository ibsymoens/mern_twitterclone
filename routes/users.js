import express from "express";
import * as userControllers from "../controllers/users.js";
import verifyAuthToken from "../middlewares/verifyAuthToken.js";

const router = express.Router();

router.get("/userInfo", verifyAuthToken, userControllers.getUserInfo);
router.get("/suggesttofollow", userControllers.getSuggestToFollow);
router.post("/signup", userControllers.signup);
router.post("/signin", userControllers.signin);
router.post("/signinwithgoogle", userControllers.signinWithGoogle);
router.post("/verifyemail", userControllers.checkEmail);
router.post("/verification", userControllers.sendVerificationCode);
router.post("/verifycode", userControllers.verifyCode);

export default router;