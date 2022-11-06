import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 600,
            laptop: 900,
            desktop: 1200,
            largesreen: 1536
        }
    }
});