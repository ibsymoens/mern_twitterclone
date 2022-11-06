import React, { useState } from "react";
import { tweetPostIcons, tweetSettingIcons, tweetSecondSettingsIcons, moreHorizIcon, favoriteIcon } from "../../assets/icons";
import { Box, Menu, MenuItem, Avatar, IconButton, Typography, ListItemIcon, ListItemText, Tooltip } from "@mui/material";


const Tweet = ({ userInfo, tweetUserName, tweetUserSearchName, tweetUserImg, tweetId, tweet, tweetImg, tweetLike, isLiked, handleLike, handleDeleteTweet }) => {
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
            <Box sx={{
                display: "flex",
                borderBottom: "1px solid #EFF3F4",
                p: 2,
                "&:hover": {
                    background: "#F7F7F7",
                    cursor: "pointer"
                }
            }}>
                <Avatar sx={{ mr: 1.5 }} alt="Sai" src={tweetUserImg} />
                <Box sx={{ flex: 11 }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <Typography variant="h6" sx={{ fontSize: ".9em" }}>{tweetUserName}</Typography>
                            <Typography variant="subtitle1" sx={{ fontSize: ".8em", ml: 1 }}>{tweetUserSearchName}</Typography>
                        </Box>
                        <IconButton onClick={handleClick}>
                            {moreHorizIcon}
                        </IconButton>
                    </Box>
                    {tweet && <Typography sx={{ whiteSpace: "pre-line" }} variant="body2">{tweet}</Typography>}
                    {tweetImg &&
                        <img sx={{ borderRadius: "1em" }}
                            style={{
                                width: "100%",
                                maxHeight: 600,
                                borderRadius: "1em"
                            }}
                            src={tweetImg}
                        />
                    }
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2
                    }}>
                        {tweetPostIcons.map((tweetIcon, index) =>
                            <Tooltip title={tweetIcon.name} key={index}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    {tweetIcon.name === "Like" ? 
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <IconButton onClick={() => handleLike(userInfo.email, tweetId, !isLiked)}>
                                                {isLiked ? <favoriteIcon.icon sx={{ color: "#F91880" }} style={{ fontSize: ".7em" }} /> : <tweetIcon.icon sx={{ color: "#7D8A93" }} style={{ fontSize: ".7em" }}/>}</IconButton>
                                            <Typography sx={isLiked ? {color: "#F91880"} : {color: "#7D8A93"}} variant="body2" pl={1.5}>{tweetLike.length !== 0 ? tweetLike.length : null}</Typography>
                                        </Box>
                                    : <IconButton>{<tweetIcon.icon sx={{ color: "#7D8A93", fontSize: ".7em" }} />}</IconButton>}
                                </Box>
                            </Tooltip>
                        )}
                    </Box>
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
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: "''",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    {`@${userInfo?.email.slice(0, userInfo?.email.indexOf("@"))}` === tweetUserSearchName ?
                        tweetSettingIcons.map((tweetSetting, index) =>
                            <MenuItem
                                id={tweetId}
                                onClick={tweetSetting.name === "Delete" ? () => handleDeleteTweet(tweetId) : null}
                                key={index}
                            >
                                <ListItemIcon sx={tweetSetting.name === "Delete" ? { color: "#F4212E" } : null}>{tweetSetting.icon}</ListItemIcon>
                                <ListItemText sx={tweetSetting.name === "Delete" ? { color: "#F4212E" } : null}>{tweetSetting.name}</ListItemText>
                            </MenuItem>
                        )
                    :
                        tweetSecondSettingsIcons.map((tweetSetting, index) =>
                            <MenuItem
                                id={tweetId}
                                key={index}
                            >
                                <ListItemIcon>{tweetSetting.icon}</ListItemIcon>
                                <ListItemText>{tweetSetting.name}</ListItemText>
                            </MenuItem>
                        )
                    }
                </Menu>
            </Box>
        </React.Fragment>
    );
}

export default Tweet;