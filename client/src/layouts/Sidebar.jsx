import React from "react";
import { Navbar } from "../components/ui";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const rdxUserInfo = useSelector(state => state.auth.userInfo);

    return (
        <React.Fragment>
            <Navbar user={rdxUserInfo} />
        </React.Fragment>
    );
}

export default Sidebar;