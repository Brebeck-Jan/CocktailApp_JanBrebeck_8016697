import React from 'react';
import SideBar from "../containers/SideBar"

export function navBar(){

    return(
        <div className="navBar">
            <SideBar Open={false} pageWrapId={"page-wrap"} outerContainerId={"APP"} />
        </div>
    );
}