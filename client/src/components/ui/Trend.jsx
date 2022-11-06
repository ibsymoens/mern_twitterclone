import React from "react";
import { searchIcon } from "../../assets/icons";
import { Box, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';

const Trend = ({ trends }) => {
    return (
        <React.Fragment>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                background: "#EFF3F4",
                pl: 2,
                mb: 2,
                borderRadius: "2.5em"
            }}>
                {searchIcon}
                <TextField sx={{
                    "& fieldset": {
                        border: "none",
                    },
                    fontSize: ".1em"
                }}
                    placeholder="Search Twitter"
                />
            </Box>
            <List sx={{ background: "#F7F9F9", borderRadius: "1em" }}>
                <ListItem disablePadding>
                    <ListItemText 
                        primary="Trends for you" 
                        primaryTypographyProps={{ style: {
                            marginLeft: "16px",
                            fontWeight: "700",
                            fontSize: "1.2em"
                        }}}
                    />
                </ListItem>
                {trends.map((trend, index) => 
                    <ListItem disablePadding key={index}>
                        <ListItemButton>
                            <ListItemText 
                                primary={trend.primary}
                                secondary={trend.secondary}
                                primaryTypographyProps={{ style: {
                                    color: "#536471",
                                    fontSize: ".75em"
                                }}}
                                secondaryTypographyProps={{ style: {
                                    color: "#0F1419",
                                    fontSize: "1em",
                                    fontWeight: "600"
                                }}}
                            />
                            <MoreHorizIcon />
                        </ListItemButton>
                    </ListItem>
                )}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText 
                            primary="Show more"
                            primaryTypographyProps={{ style: {
                                color: "#67BBF3",
                                fontSize: ".9em",
                                fontWeight: "400"
                            }}}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default Trend;