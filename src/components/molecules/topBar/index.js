import React from 'react'
import './topBar.scss'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = (props) => {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div>
          <span className="logo">Invoice Admin</span>
        </div>
        <div className="rightComponent">
          <NotificationsNoneIcon/>
          {
            props.profile &&
              <div className="profileIcon">
                  <PersonIcon fill="#fff"/>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default TopBar
