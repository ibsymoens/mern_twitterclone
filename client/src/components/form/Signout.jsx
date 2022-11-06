import React from "react";
import { signout } from "../../redux/features/auth";
import { Container, Box, Typography, Button } from "@mui/material";
import { Twitter as TwitterIcon } from '@mui/icons-material';
import { useDispatch } from "react-redux";

const Signout = ({ isShowLogoutDlg }) => {
    const dispatch = useDispatch();

    const handleLogoutBtn = () => {
        dispatch(signout());
    }

    const handleCancel = () => {
        isShowLogoutDlg(false);
    }

    return (
        <React.Fragment>
            <Container>
                <Box sx={{ p: 3, width: "300px" }}>
                    <TwitterIcon sx={{ color: "#1D9BF0", fontSize: "2em" }}/>
                    <Typography variant="h5" sx={{ fontWeight: "800", mb: 2 }}>Log out of Twitter?</Typography>
                    <Typography variant="body2" pb={2} >You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.</Typography>
                    <Button sx={{ 
                        textTransform: "unset",
                        border: "1px solid #CFD9DE",
                        borderRadius: "2.5em",
                        fontWeight: "700",
                        background: "#0F1419",
                        color: "#FFF",
                        mb: 2 
                    }} onClick={handleLogoutBtn} fullWidth>Log out</Button>
                    <Button sx={{ 
                        textTransform: "unset",
                        border: "1px solid #CFD9DE",
                        borderRadius: "2.5em",
                        color: "#0F1419",
                        fontWeight: "700",
                        mb: 2 
                    }} 
                    onClick={handleCancel} fullWidth>Cancel</Button>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Signout;