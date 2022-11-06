import React, { useState } from "react";
import { TweetForm, Signin, Signout } from "../form";
import { navbarRoutes } from "../../routes";
import { theme } from "../../assets/styles/muistyles";
import { addIcon } from "../../assets/icons";
import { Twitter as TwitterIcon, MoreHoriz as MoreHorizIcon } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Dialog, Avatar, Button, IconButton, ButtonBase, Menu, MenuItem, ThemeProvider, Typography } from "@mui/material";

const Navbar = ({ user }) => {
    const [showTweetFormDlg, setShowTweetFormDlg] = useState(false);
    const [showSigninDlg, setShowSigninDlg] = useState(false);
    const [showLogoutDlg, setShowLogoutDlg] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box sx={{ mb: 10 }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <TwitterIcon sx={{ 
                                    color: "#1D9BF0", 
                                    marginLeft: {
                                        mobile: 0,
                                        desktop: "16px"
                                    }, 
                                    fontSize: "2.1em",
                                    mt: 1,
                                    mb: 2
                                }}/>
                            </ListItemIcon>
                        </ListItem>
                        {navbarRoutes.map((navbar, index) => 
                            <ListItem sx={{
                                display: {
                                    mobile: "none",
                                    tablet: "none",
                                    laptop: "none",
                                    desktop: "block"
                                },
                            }} style={{ color: "#0F1419", textDecoration: "none" }} key={index} disablePadding>
                                <ListItemButton sx={{ borderRadius: "2.5em" }}>
                                    <ListItemIcon>{navbar.icon}</ListItemIcon>
                                    <ListItemText sx={{ color: "#0F1419" }} primary={navbar.route} />
                                </ListItemButton>
                            </ListItem>
                        )}
                        {navbarRoutes.map((navbar, index) => 
                            <Box key={index}>
                                <IconButton sx={{
                                    display: {
                                        laptop: "block",
                                        desktop: "none"
                                    }
                                }}>{navbar.icon}</IconButton>
                            </Box>
                        )}
                    </List>
                    <Button 
                        sx={{
                            display: {
                                mobile: "none",
                                tablet: "none",
                                laptop: "none",
                                desktop: "block"
                            },
                            textTransform: "unset"
                        }} 
                        style={{
                            background: "#1D9BF0",
                            color: "#FFF",
                            borderRadius: "2.5em",
                            padding: "10px 0"
                        }}
                        fullWidth
                    >Tweet</Button>
                    <IconButton sx={{
                        display: {
                            laptop: "block",
                            desktop: "none"
                        }
                    }}>{addIcon}</IconButton>
                </Box>
                <Box sx={{
                    display: {
                        mobile: "none",
                        tablet: "none",
                        laptop: "none",
                        desktop: "block"
                    },
                }}>
                    <ButtonBase 
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            "&:hover": {
                                background: "#E7E7E8",
                                borderRadius: "2.5em",
                                cursor: "pointer"
                            }
                        }}
                        onClick={handleClick}
                    >
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Avatar alt={user?.name} src={user?.img} />
                            <Box sx={{ 
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                pl: 1 
                            }}>
                                <Typography sx={{ fontSize: "1.1em" }} variant="h6">{user?.name}</Typography>
                                <Typography sx={{ fontSize: "1.1em", color: "#677682" }} variant="body2">{`@${user?.email.slice(0, user?.email.indexOf("@"))}`}</Typography>
                            </Box>
                        </Box>
                        <MoreHorizIcon />
                    </ButtonBase>
                </Box>
                <Box>
                    <IconButton sx={{
                            display: {
                                laptop: "block",
                                desktop: "none"
                            },
                        }}
                        onClick={handleClick}
                    >
                        <Avatar alt={user?.name} src={user?.img} sx={{ width: 30, height: 30 }} />
                    </IconButton>
                </Box>
                
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => setShowSigninDlg(true)}>Add an existing account</MenuItem>
                    <MenuItem onClick={() => setShowLogoutDlg(true)}>{`Log out @${user?.email.slice(0, user?.email.indexOf("@"))}`}</MenuItem>
                </Menu>
                <Dialog open={showTweetFormDlg} onClose={() => setShowTweetFormDlg(!showTweetFormDlg)}>
                    <TweetForm showDlg={showTweetFormDlg} />
                </Dialog>
                <Dialog open={showSigninDlg} onClose={() => setShowSigninDlg(!showSigninDlg)}>
                    <Signin showDlg={showSigninDlg} />
                </Dialog>
                <Dialog open={showLogoutDlg} onClose={() => setShowLogoutDlg(!showLogoutDlg)}>
                    <Signout isShowLogoutDlg={setShowLogoutDlg} showDlg={showLogoutDlg} />
                </Dialog>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Navbar;