import React from "react";
import landingPageImg from "../assets/images/lohp_en_1302x955.png";
import { theme } from "../assets/styles/muistyles";
import { LandingForm } from "../components/form";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { Twitter as TwitterIcon } from '@mui/icons-material';

const LandingPage = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Grid sx={{
                            width: {
                                mobile: "100%",
                                tablet: "100%",
                                laptop: "38%",
                                desktop: "54%"
                            },
                            order: {
                                mobile: 2,
                                tablet: 2,
                                laptop: 1
                            },
                            height: {
                                mobile: "40vh",
                                tablet: "40vh",
                                laptop: "100vh",
                                desktop: "100vh",
                            },
                            background: `url(${landingPageImg}) no-repeat`,
                            backgroundSize: "100vw 100vh",
                        }}
                        item xs={12} sm={12} md={6.5}>
                        <Box sx={{ 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                height: "100%", 
                                margin: "auto 0" 
                            }}>
                            <TwitterIcon sx={{ 
                                fontSize: {
                                    mobile: "15em",
                                    tablet: "15em",
                                    laptop: "18em",
                                    desktop: "24em"
                                }, 
                                color: "#FFF" }}/>
                        </Box>
                    </Grid>
                    <Grid sx={{
                            width: {
                                mobile: "100%",
                                tablet: "100%",
                                laptop: "60%",
                                desktop: "45%"
                            },
                            order: {
                                mobile: 1,
                                tablet: 1,
                                laptop: 2
                            }
                        }}
                        item xs={12} sm={12} md={5.5}>
                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            height: "100%", 
                            margin: {
                                mobile: "auto",
                                tablet: "auto 10%",
                                laptop: "auto",
                            },
                            p: 5
                        }}>
                            <LandingForm />
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default LandingPage;