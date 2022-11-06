import React, { useState, useEffect } from "react";
import ApiRequests from "../../api/requests";
import { List, ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar, Button } from '@mui/material';

const SuggestToFollow = ({ userInfo }) => {
    const [suggestToFollow, setSuggestToFollow] = useState([]);

    useEffect(() => {
        const getSuggestToFollow = () => {
            ApiRequests.getUserSuggestToFollow()
                        .then(res => setSuggestToFollow(res))
                        .catch(err => console.log(err.message));
        }
        getSuggestToFollow();
    }, []);

    return (
        <React.Fragment>
            <List sx={{ background: "#F7F9F9", borderRadius: "1em" }}>
                <ListItem disablePadding>
                    <ListItemText 
                        primary="Who to follow" 
                        primaryTypographyProps={{ style: {
                            marginLeft: "16px",
                            fontWeight: "700",
                            fontSize: "1.2em"
                        }}}
                    />
                </ListItem>
                {suggestToFollow.filter((user, index) => userInfo.email !== user.email && index < 4).map((suggest, idx) => 
                    <ListItem key={idx} disablePadding>
                        <ListItemButton>
                            <ListItemAvatar sx={{ paddingLeft: "0" }}>
                                <Avatar alt={suggest.name} src={suggest?.img} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={suggest.name} 
                                secondary={`@${suggest?.email.slice(0, suggest?.email.indexOf("@"))}`} 
                                primaryTypographyProps={{style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "500" }}} 
                            />
                            <Button style={{
                                    textTransform: "unset",
                                    background: "#0F1419", 
                                    color: "#FFF", 
                                    borderRadius: "2.5em", 
                                    fontSize: ".8em", 
                                    padding: "7.5px 15px"
                                }}
                                variant="#0F1419">Follow</Button>
                        </ListItemButton>
                    </ListItem>
                )}     
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText 
                            primary="Show more"
                            primaryTypographyProps={{ 
                                style: {
                                    color: "#67BBF3",
                                    fontSize: ".9em",
                                    fontWeight: "400"
                                }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </React.Fragment>
    );
}

export default SuggestToFollow;