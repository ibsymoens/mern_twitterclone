import React, { useState } from "react";
import ApiRequests from "../../api/requests";
import GoogleLogin from "../../lib/googleLogin";
import { signin } from "../../redux/features/auth";
import { tweeterIcon, appleIcon, visibilityIcon, visibilityOffIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { Box, Typography, TextField, InputAdornment, Button, IconButton, Alert } from "@mui/material";

const initialState = {email: "", password: ""};

const Signin = ({ setLoading }) => {
    const [userCreds, setUserCreds] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        ApiRequests.signin(userCreds)
                   .then(res => {
                        dispatch(signin(res));
                        setLoading(false);
                   })
                   .catch(err => {
                        setErrMsg(err.response.data.message);
                        setLoading(false);
                   });
    }

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    }

    return (
        <React.Fragment>
            <Box sx={{
                    width: {
                        mobile: "430px",
                        tablet: "530px",
                        laptop: "583px",
                        desktop: "583px"
                    },
                    maxWidth: "583px",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "1em",
                    p: 3
                }}>
                <Box sx={{ margin: "auto" }}>    
                    <Typography variant="h6">{tweeterIcon}</Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <GoogleLogin />
                        <Button sx={{
                            width: "298px",
                            maxWidth: "298px",
                            textTransform: "unset",
                            border: "1px solid #CFD9DE",
                            borderRadius: "2.5em",
                            color: "#0F1419",
                            fontWeight: "700"
                        }} startIcon={appleIcon} fullWidth>Sign up with Apple</Button>
                        <Typography sx={{ 
                                width: "298px",
                                maxWidth: "298px",
                                textAlign: "center",
                                mt: 1,
                                mb: 1
                            }} 
                            variant="body1">or</Typography>
                        <TextField sx={{
                                width: "298px",
                                maxWidth: "298px",
                                mt: 1,
                                mb: 1
                            }}
                            type="email" 
                            label="Email" 
                            name="email" 
                            onChange={(e) => setUserCreds({...userCreds, [e.target.name]: e.target.value})} 
                            fullWidth 
                            required />
                        <TextField sx={{
                                width: "298px",
                                maxWidth: "298px",
                                mt: 1,
                                mb: 1
                            }}
                            type={
                                showPassword ? 
                                "text" : 
                                "password"
                            } 
                            label="Password" 
                            name="password" 
                            onChange={(e) => setUserCreds({...userCreds, [e.target.name]: e.target.value})} 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton onClick={toggleVisibility}>
                                    {showPassword ? <>{visibilityIcon}</> : <>{visibilityOffIcon}</>}
                                    </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            fullWidth 
                            required />
                        <Button sx={{
                                width: "298px",
                                maxWidth: "298px",
                                background: "#0F1419",
                                textTransform: "unset",
                                border: "1px solid #CFD9DE",
                                borderRadius: "2.5em",
                                color: "#FFF",
                                fontWeight: "700",
                                margin: "20px 0"
                            }} 
                            type="submit" 
                            variant="contained" 
                            onSubmit={handleSubmit} 
                            fullWidth>Log in</Button>
                        <Button sx={{
                                width: "298px",
                                maxWidth: "298px",
                                textTransform: "unset",
                                border: "1px solid #CFD9DE",
                                borderRadius: "2.5em",
                                color: "#0F1419",
                                fontWeight: "700",
                                margin: "30px 0",
                                mb: 1 
                            }}  
                            fullWidth>Forgot Password?</Button>
                        <Typography sx={{ 
                                width: "298px",
                                maxWidth: "298px",
                                fontSize: ".9em", 
                                color: "#536471", 
                                pb: 2 
                            }} 
                            varaint="body1">Don't have an account? <span style={{ color: "#1D9BF0"}}>Sign up</span></Typography>
                        </Box>
                    </form>
                    {errMsg !== "" ? <Alert sx={{ width: '100%' }}  severity="error">{errMsg}</Alert> : null}
                </Box>
            </Box>
        </React.Fragment>
    );  
}

export default Signin;