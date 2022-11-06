import React from "react";
import Tweet from "../components/ui/Tweet";
import ApiRequests from "../api/requests";
import { signout } from "../redux/features/auth";
import { likecount_tweet, delete_tweet } from "../redux/features/tweet";
import { autoAwesome } from "../assets/icons";
import { TweetForm } from "../components/form";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Typography, Collapse } from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

const Home = () => {
    const rdxUserInfo = useSelector(state => state.auth.userInfo);
    const rdxTweet = useSelector(state => state.tweet.tweet);
    const dispatch = useDispatch();

    const handleLike = async (email, tweetId, isLiked) => {
        ApiRequests.likeTweet({email, tweetId, isLiked})
                    .then(res => dispatch(likecount_tweet(res)))
                    .catch(() => {
                        alert("Session Expired.");
                        dispatch(signout());
                    });
    }

    const handleDeleteTweet = async (id) => {
        ApiRequests.deleteTweet(id)
                    .then(() => dispatch(delete_tweet(id)))
                    .catch(err => {
                        console.log(err.response.data.message);
                        alert("Session Expired.");
                        dispatch(signout());
                    });           
    }

    return (
        <React.Fragment>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2, 
                pt: 1.5, 
                pb: 2
            }}>
                <Typography variant="h6">Home</Typography>
                <IconButton>{autoAwesome}</IconButton>
            </Box>
            <TweetForm user={rdxUserInfo} />
            <TransitionGroup>
                {rdxTweet.map(tweet => 
                    <Collapse key={tweet._id} >
                        <Tweet 
                            isLiked={tweet.like.includes(rdxUserInfo.email)}
                            userInfo={rdxUserInfo}
                            tweetUserName={tweet.userName} 
                            tweetUserSearchName={tweet.userSearchName} 
                            tweetUserImg={tweet.userImg} 
                            tweetId={tweet._id}
                            tweet={tweet.tweet} 
                            tweetImg={tweet.tweetImg} 
                            tweetLike={tweet.like}
                            handleLike={handleLike}
                            handleDeleteTweet={handleDeleteTweet}
                        />
                    </Collapse>
                )}
            </TransitionGroup>
        </React.Fragment>
    );
}

export default Home;