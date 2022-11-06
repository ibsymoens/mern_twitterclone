import { 
    GifBox, 
    Poll, 
    SentimentSatisfiedAlt, 
    DateRange, 
    LocationOn,
    ChatBubbleOutline,
    Repeat,
    FavoriteBorder,
    IosShare,
    Add,
    Twitter,
    Apple,
    Visibility,
    VisibilityOff,
    MoreHoriz,
    Delete,
    PushPin,
    PostAdd,
    ChatBubbleOutlineRounded,
    CodeOffRounded,
    EqualizerRounded,
    AutoAwesome,
    SentimentDissatisfiedRounded,
    PersonAddAltRounded,
    NoteAddRounded,
    VolumeOffRounded,
    BlockRounded,
    EmojiFlagsRounded,
    Close,
    ArrowBack,
    Search,
    Favorite
} from "@mui/icons-material";

export const addIcon = <Add style={{ 
    background: "#1D9BF0", 
    color: "#FFF",
    borderRadius: "2.5em"
}}/>;

export const tweeterIcon = <Twitter fontSize="large" style={{ color: "#1D9BF0" }}/>;
export const appleIcon = <Apple fontSize="large" style={{ color: "#0F1419" }}/>;
export const autoAwesome = <AutoAwesome sx={{ color: "#0F1419" }} />;
export const visibilityIcon = <Visibility />;
export const visibilityOffIcon = <VisibilityOff />;
export const moreHorizIcon = <MoreHoriz />;
export const closeIcon = <Close />;
export const arrowBackIcon = <ArrowBack />;
export const searchIcon = <Search />;
export const favoriteIcon = {name: "Like", icon: Favorite};

export const tweetIcons = [
    {
        name: "Gif Box",
        icon: <GifBox style={{ color: "#1D9BF0" }} />
    },
    {
        name: "Poll",
        icon: <Poll style={{ color: "#1D9BF0" }} />
    },
    {
        name: "Sentiment SatisfiedAlt",
        icon: <SentimentSatisfiedAlt style={{ color: "#1D9BF0" }} />
    },
    {
        name: "Date Range",
        icon: <DateRange style={{ color: "#1D9BF0" }} />
    },
    {
        name: "Location On",
        icon: <LocationOn style={{ color: "#1D9BF0" }} />
    }
];                                

export const tweetPostIcons = [
    {
        name: "Reply",
        icon: ChatBubbleOutline
    },
    {
        name: "Retweet",
        icon: Repeat
    },
    {
        name: "Like",
        icon: FavoriteBorder
    },
    {
        name: "Share",
        icon: IosShare
    }
];

export const tweetSettingIcons = [
    {
        name: "Delete",
        icon: <Delete />
    },
    {
        name: "Pin to your profile",
        icon: <PushPin />
    },
    {
        name: "Add/remove",
        icon: <PostAdd />
    },
    {
        name: "Change who can reply",
        icon: <ChatBubbleOutlineRounded />
    },
    {
        name: "Embed Tweet",
        icon: <CodeOffRounded />
    },
    {
        name: "View Tweet analytics",
        icon: <EqualizerRounded />
    }
];

export const tweetSecondSettingsIcons = [
    {
        name: "Not interested in this Tweet",
        icon: <SentimentDissatisfiedRounded />
    },
    {
        name: "Unfollow",
        icon: <PersonAddAltRounded />
    },
    {
        name: "Add/remove",
        icon: <NoteAddRounded />
    },
    {
        name: "Mute",
        icon: <VolumeOffRounded />
    },
    {
        name: "Block",
        icon: <BlockRounded />
    },
    {
        name: "Embed Tweet",
        icon: <CodeOffRounded />
    },
    {
        name: "Report Tweet",
        icon: <EmojiFlagsRounded />
    }
];