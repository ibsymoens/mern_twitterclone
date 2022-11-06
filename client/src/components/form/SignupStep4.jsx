import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const SignupStep4 = ({ setIsEnableNextBtn, setCreds, creds }) => {
    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
        if(e.target.value.length >= 6) setIsEnableNextBtn(false);
        else setIsEnableNextBtn(true);
    }

    return (
        <React.Fragment>
            <Box sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <form>
                <Typography sx={{ fontSize: ".8em", color: "#536471", mt: 4, mb: 1 }} variant="body2">{`Enter it below to verify ${creds.email}`}</Typography>
                    <TextField sx={{
                            width: {
                                mobile: "390px",
                                tablet: "430px"
                            },
                            my: 1,
                        }}
                        type="text" 
                        label="Verification code" 
                        name="verificationCode"
                        value={creds.verificationCode}
                        onChange={handleChange}
                        fullWidth />
                    <Typography sx={{ fontSize: ".7em", color: "#536471" }}><span style={{ color: "#1DB6F6" }}>Didn't receive an email?</span></Typography>
                </form>
            </Box>
        </React.Fragment>
    );
}

export default SignupStep4;