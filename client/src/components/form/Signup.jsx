import React, { useState } from "react";
import ApiRequests from "../../api/requests";
import Loading from "../ui/Loading";
import { signup } from "../../redux/features/auth";
import { useDispatch } from "react-redux";
import { closeIcon, arrowBackIcon } from "../../assets/icons";
import { Box, Typography, Button, IconButton, Alert } from "@mui/material";
import { signupStepsRoutes } from "../../routes/singupsteps";

const initialState = { name: "", email: "", permission: false, verificationCode: "", password: "", month: "", day: "", year: "" };

const Signup = ({ setShowSignupDlg }) => {
    const [creds, setCreds] = useState(initialState);
    const [activeStep, setActiveStep] = useState(0);
    const [isEnableNextBtn, setIsEnableNextBtn] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const dispatch = useDispatch();

    const handleNext = async () => {
        setErrMsg("");
        if(activeStep === 0) {
            ApiRequests.verifyEmail({email: creds.email})
                        .then(res => {
                            if(res === null) {
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                                setIsEnableNextBtn(true);
                                if(activeStep == 0 && creds.permission) setIsEnableNextBtn(false);
                                if(activeStep == 1) setIsEnableNextBtn(false);
                            } else {
                                setErrMsg(res.message);
                                setIsEnableNextBtn(true);
                                setCreds({...creds, "email": ""});
                            }
                        })
                        .catch(err => console.log(err.message));
        } else if(activeStep === 2) {
            setLoading(true);
            ApiRequests.sendVerification({email: creds.email})
                        .then(() => {
                            setTimeout(() => {
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                                setIsEnableNextBtn(true);
                                setLoading(false);
                            }, 300);
                        })
                        .catch(err => {
                            console.log(err.message);
                            setLoading(false);
                        });
        } else if(activeStep === 3) {
            setLoading(true);
            ApiRequests.verifyVerificationCode({email: creds.email, verificationCode: creds.verificationCode})
                        .then(res => {
                            setTimeout(() => {
                                setLoading(false);
                                if(res === null) return setErrMsg("Invalid code.");
                                setErrMsg("");
                                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                                setIsEnableNextBtn(true);
                            }, 300);
                        })
                        .catch(err => {
                            console.log(err.message);
                            setLoading(false);
                        });
        } else if(activeStep === 4) {
            setLoading(true);
            ApiRequests.signup(creds)
            .then(res => {
                setTimeout(() => {
                    dispatch(signup(res));
                    setLoading(false);
                }, 3000);
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
            });
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setIsEnableNextBtn(true);
            if(activeStep == 0 && creds.permission) setIsEnableNextBtn(false);
            if(activeStep == 1) setIsEnableNextBtn(false);
        }
    };

    const handleBack = () => {
        setErrMsg("");
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setIsEnableNextBtn(false);
    };

    const handleClose = () => setShowSignupDlg(false);
    
    return (
        <React.Fragment>
            <Box 
                sx={{ 
                    width: { 
                        mobile: "430px", 
                        tablet: "530px", 
                        laptop: "583px", 
                        desktop: "583px" 
                    }, 
                    maxWidth: "583px",
                    height: "100vh",
                    display: "flex", 
                    justifyContent: "center", 
                    flexDirection: "column", 
                    p: 3 
                }}
            >
                {loading ? 
                    <Loading />
                :
                    <Box sx={{ maxWidth: 423, margin: "auto" }}>
                        {activeStep === 0 ? <IconButton sx={{ position: "absolute", top: 19, left: 10 }} onClick={handleClose}>{closeIcon}</IconButton> : <IconButton sx={{ position: "absolute", top: 19, left: 10 }} onClick={handleBack}>{arrowBackIcon}</IconButton>}
                        <Typography sx={{ fontSize: "1.2em", fontWeight: 600, pb: 4, position: "absolute", top: 24, left: { mobile: 50, tablet: 60, laptop: 80 } }} variant="h6">Step {activeStep+1} of {signupStepsRoutes.length}</Typography>
                        <Typography sx={{ fontWeight: 700 }} variant="h5">{signupStepsRoutes[activeStep].label}</Typography>
                        <Box>
                            {signupStepsRoutes.filter((stepFil, indx) => indx === activeStep).map((e, indx) => <e.component setIsEnableNextBtn={setIsEnableNextBtn} setActiveStep={setActiveStep} setCreds={setCreds} creds={creds} key={indx}/>)}
                        </Box>
                        {errMsg !== "" ? <Alert sx={{ mt: 1 }} severity="error">{errMsg}</Alert> : null}
                        <Button 
                            sx={{
                                borderRadius: "2em",
                                width: "90%",
                                maxWidth: "410px",
                                height: "40px",
                                position: "absolute",
                                bottom: 30
                            }}
                            style={isEnableNextBtn ? { background: "#888A8D", color: "#FFF" } : { background: "#0F1419", color: "#FFF" }}
                            size="small"
                            onClick={handleNext}
                            disabled={isEnableNextBtn}>Next</Button>
                    </Box>
                }
            </Box>
        </React.Fragment>
    );
}

export default Signup;