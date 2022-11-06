import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";

const SignupStep5 = ({setIsEnableNextBtn, setCreds, creds}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value});
        if(e.target.value.length >= 8) 
            setIsEnableNextBtn(false);
        else
            setIsEnableNextBtn(true);
    }

    return (
        <React.Fragment>
            <form>
            <Typography sx={{ fontSize: ".8em", color: "#536471", mb: 2 }} variant="body2">Make sure it's 8 characters or more.</Typography>
                <TextField sx={{
                        width: {
                            mobile: "390px",
                            tablet: "430px"
                        },
                        mt: 1,
                        mb: 1
                    }}
                    type={showPassword ? "text" : "password"} 
                    label="Password" 
                    name="password"
                    onChange={handleChange}
                    fullWidth />
                <Button sx={{ textTransform: "unset", color: "#1DB6F6", fontSize: ".7em", fontWeight: 400, pl: 0 }} onClick={() => setShowPassword(!showPassword)}>Reveal password</Button>
            </form>
        </React.Fragment>
    );
}

export default SignupStep5;