import React, {useState} from 'react'
// import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import LoginPage from '../Admin/LoginPage';
import {openModal} from '../../actions/modalAction'

import './ProfileSection.css'

const ProfileSection = () => {
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const openModalHandle = () => {
  // dispatch(openModal("open", <LoginPage />));
  // };
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header-container">
      <div className="header">
        <Link to='/'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png" className="header_logo" alt="logo" />
        </Link>
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
            <div className='dropdown'>
              <Avatar  onClick={toggleDropdown} className='dropbtn'/>
              {dropdownVisible && (
                <div className="dropdown-content">
                  <span>Log in</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
