import React from "react";
import { footerCreds } from "../data";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <React.Fragment>
            <Box sx={{
                width: "90%",
                margin: "auto",
                padding: "10px 0",
                lineHeight: "30",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {footerCreds.map((cred, index) => 
                    <Typography sx={{
                        color: "#536471",
                        fontSize: ".8em",
                        lineHeight: "2",
                        mr: 2
                    }}
                    key={index}
                    variant="body2">{cred}</Typography>
                )}
            </Box>
        </React.Fragment>
    );
}

export default Footer;