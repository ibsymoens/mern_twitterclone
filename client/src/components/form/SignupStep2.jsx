import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";

const SignupStep2 = ({setIsEnableNextBtn, setCreds, creds}) => {
    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: !creds.permission});
        if(e.target.checked) setIsEnableNextBtn(false)
        else setIsEnableNextBtn(true)
    } 

    return (
        <React.Fragment>
            <Typography sx={{ fontWeight: 600, fontSize: "1.3em", lineHeight: 1.2, mt: 4, mb: 2 }} variant="h6">Track where you see Twitter content across the web</Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography sx={{ fontSize: ".8em", color: "#536471", mb: 2 }} variant="body2">Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</Typography>
                <Checkbox name="permission" checked={creds.permission} onChange={handleChange} />
            </Box>
            <Typography sx={{ fontSize: ".8em", color: "#536471" }} variant="body2">By signing up, you agree to our <span style={{ color: "#1DB6F6" }}>Terms, Privacy Policy, and Cookie Use.</span> Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. <span style={{ color: "#1DB6F6" }}>Learn more</span></Typography>
        </React.Fragment>
    );
}

export default SignupStep2;