import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './topBar.scss'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {AuthContext} from '../../../context/AuthContext'

const TopBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div>
          <Link style={{textDecoration:'none'}} to="/">
            <span className="logo">Invoice Admin</span>
          </Link>
        </div>
        <div className="rightComponent">
          <NotificationsNoneIcon className="icon"/>
          {
            user.profilePicture.includes('$') ? <div className="profileIcon">
              <PersonIcon fill="#fff" className="icon"/>
            </div> : <img alt="icon" className="profileIcon icon" src={`data:image/png;base64,${user.profilePicture}`}/>
          }
        </div>
      </div>
    </div>
  )
}

export default TopBar
