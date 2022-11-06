import React from "react";
import { Typography, TextField } from "@mui/material";

const SignupStep3 = ({ setActiveStep, creds }) => {
    const handleFocus = () => {
        setActiveStep(0);
    }

    return (
        <React.Fragment>
            <form>
                <TextField sx={{
                        mt: 1,
                        mb: 1
                    }}
                    type="text" 
                    label="Name" 
                    name="name"
                    value={creds.name}
                    onFocus={handleFocus}
                    fullWidth />
                <TextField sx={{
                        mt: 1,
                        mb: 1
                    }}
                    type="text" 
                    label="Email" 
                    name="email"
                    value={creds.email}
                    onFocus={handleFocus}
                    fullWidth />
                <TextField sx={{
                        mt: 1,
                        mb: 1
                    }}
                    type="text" 
                    label="birthdate" 
                    name="birthdate" 
                    value={`${creds.month} ${creds.day}, ${creds.year}`}
                    onFocus={handleFocus}
                    fullWidth />
                <Typography sx={{ fontSize: ".7em", color: "#536471" }}>By signing up, you agree to the <span style={{ color: "#1DB6F6" }}>Terms of Service and Privacy Policy</span>, including <span style={{ color: "#1DB6F6" }}>Cookie Use</span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span style={{ color: "#1DB6F6" }}>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span style={{ color: "#1DB6F6" }}>here</span>.</Typography>
            </form>
        </React.Fragment>
    );
}

export default SignupStep3;