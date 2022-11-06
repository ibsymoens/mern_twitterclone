import React, { useState, useEffect } from "react";
// pages and api requests
import ApiRequests from "./api/requests";
import * as pages from "./pages";
import * as layouts from "./layouts";
import * as uicomponents from "./components/ui";
// redux
import { fetch_tweets } from "./redux/features/tweet";
import { setsessiontoken, setuserinfo, signout } from "./redux/features/auth";
// packages
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const authToken = useSelector(state => state.auth.token);
    const tweet = useSelector(state => state.tweet.tweet);

    useEffect(() => {
        if((authToken !== null) || (authToken === null && localStorage.token)) {
            if(authToken === null) dispatch(setsessiontoken());
            ApiRequests.getUserInfo()
                .then(res => {
                    dispatch(setuserinfo(res));
                    setUser(res);
                    if(Object.keys(tweet).length === 0) {
                        ApiRequests.fetchTweets()
                            .then(res => dispatch(fetch_tweets(res)))
                            .catch(err => console.log(err.message));
                    }
                    setLoading(false);
                })
                .catch(() => dispatch(signout()));
        } else setLoading(false);        
    }, [authToken]);

    if(loading) return <uicomponents.Loading />
        
    return (
        <React.Fragment>
            <Router>
                {user === null ? 
                    <React.Fragment>
                        {/* Landing Page */}
                        <Routes>
                            <Route path="/" element={<pages.LandingPage />} key={1} exact />
                            <Route path="*" element={<pages.PageNotFound />}/>
                        </Routes>
                        <layouts.Footer />
                    </React.Fragment>
                :
                    <React.Fragment>
                        {/* Pages */}
                        <Container sx={{ maxWidth: "1265px" }} maxWidth="false">
                            <Grid container>
                                <Grid sx={{
                                    position: "sticky",
                                    top: 0,
                                    bottom: 0,
                                    pl: 2,
                                    pr: 2
                                }} item xs={2} sm={1.5} md={1} lg={3}>
                                    <Box sx={{ position: "relative" }}>
                                        <layouts.Sidebar />
                                    </Box>
                                </Grid>
                                <Grid sx={{
                                    borderLeft: "1px solid #EFF3F4",
                                    borderRight: "1px solid #EFF3F4"
                                }} item xs={10} sm={10} md={7} lg={5.5}>
                                    <Routes>
                                        <Route path="/" element={<pages.Home />} />
                                        <Route path="*" element={<pages.PageNotFound />} />
                                    </Routes>
                                </Grid>
                                <Grid sx={{ 
                                    pl: 2 
                                }} item xs={0} sm={0} md={4} lg={3.5}>
                                    <layouts.RightSidebarSuggestions />
                                </Grid>                         
                            </Grid>
                        </Container>
                    </React.Fragment>
                }
            </Router>
        </React.Fragment>
    );
}

export default App;