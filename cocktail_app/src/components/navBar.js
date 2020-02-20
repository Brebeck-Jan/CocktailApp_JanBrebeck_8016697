import React from 'react';
import SideBar from "../containers/SideBar"
import "./navBar"

export default function navBar(){

    return(
        <div className="navBar">
            <SideBar Open={false} pageWrapId={"page-wrap"} outerContainerId={"navBar"} />
        </div>
    );
}