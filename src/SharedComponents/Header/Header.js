import React from 'react';
import UserProfileAvatar from "../../assets/user.svg"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                Ice queen
            </div>
            <div className="profile">
                <img src={UserProfileAvatar}  className="profile-image" alt="profile"/>
            </div>
        </div>
    )
}
export default Header