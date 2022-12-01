import React, { useState } from "react";
import GoogleIcon from "../assets/images/google.png";
import ApiRequests from "../api/requests";
import Loading from "../components/ui/Loading";
import { signin } from "../redux/features/auth";
import { useGoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const GoogleLogin = () => {
    const [loading, setLoading] = useState(false);
    const authToken = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    const handleGoogleOAuthLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            {
                setLoading(true);
                ApiRequests.signinWithGoogle(tokenResponse)
                       .then(res => {
                            let isUser = false;
                            if(authToken !== null || localStorage.token) isUser = true;
                            dispatch(signin(res));
                            setLoading(false);
                            if(isUser) window.location.reload();
                       })
                       .catch(err => {
                            setLoading(false);
                            console.log(err.response);
                       });
            }
        },
    });

    if(loading) return <Loading />

    return (
        <React.Fragment>
            <Button 
                sx={{
                    mb: 1,
                    textTransform: "unset",
                    border: "1px solid #CFD9DE",
                    borderRadius: "2.5em",
                    color: "#0F1419",
                    fontWeight: "700",
                    maxWidth: "300px"
                }} 
                onClick={handleGoogleOAuthLogin} 
                startIcon={<img src={GoogleIcon} />} 
                fullWidth>Sign up with Google</Button>
        </React.Fragment>
    );
}

export default GoogleLogin;