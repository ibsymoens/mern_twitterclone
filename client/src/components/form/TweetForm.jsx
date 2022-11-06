import React, { useState } from "react";
import ApiRequests from "../../api/requests";
import { signout } from "../../redux/features/auth";
import { create_tweet } from "../../redux/features/tweet";
import { useDispatch } from "react-redux";
import { tweetIcons } from "../../assets/icons";
import { Box, Avatar, TextField, Button, IconButton } from "@mui/material";

const initialState = { tweet: "", tweetImg: "" }

const TweetForm = ({ user }) => {
    const [tweet, setTweet] = useState(initialState);
    const [isTweet, setIsTweet] = useState(true);
    const dispatch = useDispatch();

    const handleTweet = async (e) => {
        e.preventDefault();

        ApiRequests.createTweet(tweet)
                   .then(res => dispatch(create_tweet(res)))
                   .catch(err => {
                        alert("Session Expired.");
                        dispatch(signout());
                   });
                   
        setTweet(initialState);
        setIsTweet(true);
    }

    const changeVal = (e) => {
        setTweet({...tweet, [e.target.name]: e.target.value});
        if(e.target.value === "") setIsTweet(true);
        else setIsTweet(false);
    }

    return (
        <React.Fragment>
            <Box sx={{
                display: "flex",  
                pl: 2, 
                pr: 2,
                pb: 2
            }}>
                <Avatar 
                    sx={{
                        mt: .5
                    }}
                    alt={user?.name} 
                    src={user?.img} 
                />
                <Box sx={{
                    flex: 12
                }}>
                    <TextField sx={{ 
                            "& fieldset": { 
                                border: "none",
                            },
                            ml: 1,
                        }} 
                        placeholder="What's happening?" 
                        value={tweet.tweet}
                        onChange={changeVal} 
                        name="tweet" 
                        multiline    
                        fullWidth />
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ pl: 1.5 }}>
                            {tweetIcons.map((icon, index) => <IconButton key={index}>{icon.icon}</IconButton>)}
                        </Box>                     
                        <Button style={isTweet ? {
                                background: "#8ECDF8",
                                borderRadius: "2.5em",
                                color: "#FFF",
                                padding: "5px 20px",
                                fontSize: ".8em"
                            } : {
                                background: "#1D9BF0",
                                borderRadius: "2.5em",
                                color: "#FFF",
                                padding: "5px 20px",
                                fontSize: ".8em"
                            }} 
                            sx={{ textTransform: "unset" }}
                            onClick={handleTweet} 
                            disabled={isTweet}>Tweet</Button>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default TweetForm;