import React, { useState } from "react";
import { Signup, Signin } from "./";
import Loading from "../ui/Loading";
import GoogleLogin from "../../lib/googleLogin";
import { theme } from "../../assets/styles/muistyles";
import { Typography, Button, Dialog, Box, ThemeProvider } from '@mui/material';
import { Twitter as TwitterIcon, Apple as AppleIcon } from '@mui/icons-material';


const LandingForm = () => {
    const [showSignupDlg, setShowSignupDlg] = useState(false);
    const [showSigninDlg, setShowSigninDlg] = useState(false);
    const [loading, setLoading] = useState(false);
    
    if(loading) return <Loading />

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <TwitterIcon sx={{ fontSize: "3em", color: "#1D9BF0", mb: 3 }}/>
                <Typography variant="h1" sx={{ fontSize: "3.5em", fontWeight: "900" }}>Happening now</Typography>
                <Typography variant="h4" sx={{ fontSize: "1.8em", fontWeight: "900", mt: 5, mb: 3 }} >Join Twitter today.</Typography>
                <Box sx={{
                        width: {
                            tablet: "73%"
                        }
                    }}
                >
                    <GoogleLogin />
                    <Button sx={{
                            textTransform: "unset",
                            border: "1px solid #CFD9DE",
                            borderRadius: "2.5em",
                            color: "#0F1419",
                            fontWeight: "700",
                            maxWidth: "300px"
                        }} 
                        startIcon={<AppleIcon />} 
                        fullWidth>Sign up with Apple</Button>
                    <Typography sx={{ 
                            textAlign: "center",
                            mt:1,
                            mb: 1,
                            maxWidth: "300px"
                        }} 
                        variant="body1">or</Typography>
                    <Button sx={{
                            textTransform: "unset",
                            borderRadius: "2.5em",
                            padding: "6px 20px",
                            maxWidth: "300px"
                        }} 
                        onClick={(e) => setShowSignupDlg(true)} 
                        variant="contained" 
                        fullWidth>Sign up with phone or email</Button>
                    <Typography sx={{ 
                            fontSize: ".7em", 
                            color: "#536471",
                            pt: 1,
                            maxWidth: "300px"
                        }} 
                        variant="body2">By signing up, you agree to the <span style={{ color: "#1DB6F6" }}>Terms of Service</span> and <span style={{ color: "#1DB6F6" }}>Privacy</span>, including <span style={{ color: "#1DB6F6" }}>Cookie Use.</span></Typography>
                    <Typography sx={{ 
                            fontSize: "1.1em",
                            mt: 6
                        }} 
                        variant="h6">Already have an account?</Typography>
                    <Button 
                        sx={{
                            textTransform: "unset",
                            border: "1px solid #CFD9DE",
                            borderRadius: "2.5em",
                            padding: "6px 20px",
                            maxWidth: "300px"
                        }}
                        onClick={(e) => setShowSigninDlg(true)} 
                        fullWidth>Sign in</Button>
                    <Dialog sx={{ height: "95vh", minHeight: "480px !important", maxHeight: "650px !important", margin: "auto" }} open={showSignupDlg} onClose={() => setShowSignupDlg(!showSignupDlg)}>
                        <Signup setShowSignupDlg={setShowSignupDlg} showDlg={showSignupDlg} />
                    </Dialog>
                    <Dialog open={showSigninDlg} onClose={() => setShowSigninDlg(!showSigninDlg)}>
                        <Signin showDlg={showSigninDlg} setLoading={setLoading} />
                    </Dialog>
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default LandingForm;