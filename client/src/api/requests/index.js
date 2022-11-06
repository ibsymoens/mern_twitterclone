import * as endpoints from "../endpoints";
import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

class ApiRequests {
    static async signup(obj) {
        const { data } = await API.post(endpoints.SIGN_UP, {
            headers: {
                "Api-Key": process.env.API_KEY,
            },
            data: obj
        });
        return data;
    }

    static async signin(obj) {
        const { data } = await API.post(endpoints.SIGN_IN, {
            headers: {
                "Api-Key": process.env.API_KEY
            },
            data: obj
        });
        return data;
    }

    static async signinWithGoogle(obj) {
        const googleData = await axios.get(process.env.REACT_APP_GOOGLE_API, {
            headers: {
                "Authorization": `Bearer ${obj.access_token}`
            }
        });
        const { data } = await API.post(endpoints.SIGN_IN_WITH_GOOGLE, {
            headers: {
                "Api-Key": process.env.API_KEY,
                Authorization: `${obj.token_type} ${obj.access_token}`,
            },
            data: googleData.data
        });
        return data;
    }

    static async verifyEmail(obj) {
        const { data } = await API.post(endpoints.VERIFY_EMAIL, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ'
            },
            data: obj
        });
        return data;
    }

    static async sendVerification(obj) {
        const { data } = await API.post(endpoints.SEND_VERIFICATION, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ'
            },
            data: obj
        });
        return data;
    }

    static async verifyVerificationCode(obj) {
        const { data } = await API.post(endpoints.VERIFY_VERIFICATION_CODE, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ'
            },
            data: obj
        });
        return data;
    }

    static async getUserInfo() {
        const { data } = await API.get(endpoints.GET_USER_INFO, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ',
                Authorization: `Bearer ${localStorage.token}`
            }
        });
        return data;
    }

    static async getUserSuggestToFollow() {
        const { data } = await API.get(endpoints.GET_USER_SUGGEST_TO_FOLLOW, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ',
                Authorization: `Bearer ${localStorage.token}`
            }
        });
        return data;
    }

    static async createTweet(obj) {
        const { data } = await API.post(endpoints.TWEET, {
            headers: {
                "Api-Key": 'UE9BgvFd3jgLQ2UFqcqcgLQE9Bgv2d3j2UFqcqcgLQ',
                Authorization: `Bearer ${localStorage.token}`
            },
            data: obj
        });
        return data;
    }
    
    static async fetchTweets() {
        const { data } = await API.get(endpoints.FETCH_TWEETS, {
            headers: {
                "Api-Key": process.env.API_KEY,
                Authorization: `Bearer ${localStorage.token}`
            }
        });
        return data;
    }

    static async likeTweet(obj) {
        const { data } = await API.patch(`${endpoints.LIKE_TWEET}`, {
            headers: {
                "Api-Key": process.env.API_KEY,
                Authorization: `Bearer ${localStorage.token}`
            },
            data: obj
        });
        return data;
    }

    static async deleteTweet(obj) {
        const { data } = await API.delete(`${endpoints.DELETE_TWEET}/${obj}`, {
            headers: {
                "Api-Key": process.env.API_KEY,
                Authorization: `Bearer ${localStorage.token}`
            }
        });
        return data;
    }
}

export default ApiRequests;