import React from 'react'
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import './ProfileSection.css'

const ProfileSection = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png" className="header_logo" alt="logo" />
        <div className="header_center">
          <p>Places to Stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>
        <div className="header_right">
          <p>Become a host</p>
          <LanguageIcon />
          <div className="header_dropdowns">
            <MenuIcon className="menu-icon"/>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
