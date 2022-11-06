import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
        <React.Fragment>
            <Box sx={{
                background: "rgba(255,255,255, 0.9)",
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <CircularProgress />
            </Box>
        </React.Fragment>
    );
}

export default Loading;