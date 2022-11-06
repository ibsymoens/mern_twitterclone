import React from "react";
import { trends } from "../data";
import { theme } from "../assets/styles/muistyles";
import { Trend, SuggestToFollow } from "../components/ui";
import { Footer } from "../layouts";
import { useSelector } from "react-redux";
import { Box, ThemeProvider } from '@mui/material';

const RightSidebarSuggestions = () => {
    const rdxUserInfo = useSelector(state => state.auth.userInfo);
    
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    display: {
                        mobile: "none",
                        tablet: "none",
                        laptop: "block"
                    }
                }}>
                    <Box mt={2}>
                        <Trend trends={trends} />
                    </Box>
                    <Box mt={2}>
                        <SuggestToFollow userInfo={rdxUserInfo} />
                    </Box>
                    <Footer />
                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default RightSidebarSuggestions;