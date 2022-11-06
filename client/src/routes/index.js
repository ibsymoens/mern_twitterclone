import * as pages from "../pages";
import { 
    Home, 
    Tag, 
    Notifications, 
    Email, 
    BookmarkBorder, 
    Description, 
    PermIdentity, 
    MoreHoriz 
} from '@mui/icons-material';

export const routes = [
    {
        component: <pages.Home />,
        path: "/"
    }
];

export const navbarRoutes = [
    {
        route: "Home",
        icon: <Home sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Explore",
        icon: <Tag sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Notifications",
        icon: <Notifications sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Messages",
        icon: <Email sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Bookmarks",
        icon: <BookmarkBorder sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Lists",
        icon: <Description sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "Profile",
        icon: <PermIdentity sx={{ color: "#0F1419" }} />,
        path: "/"
    },
    {
        route: "More",
        icon: <MoreHoriz sx={{ color: "#0F1419" }} />,
        path: "/"
    }
];