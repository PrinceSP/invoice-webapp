import React, {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import './topBar.scss'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {AuthContext} from '../../../context/AuthContext'

const TopBar = () => {
  const [toggle,setToggle] = useState(false)
  const {user} = useContext(AuthContext)

  const toggleModal = (value)=>{
    if (value===true) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        {/**<span style={{backgroundColor:'transparent',width:'100vw',height:'100vh',position:'absolute',top:0,zIndex:-1}} onClick={()=>toggleModal(false)}></span>**/}
        <div>
          <Link style={{textDecoration:'none'}} to="/">
            <span className="logo">Invoice Admin</span>
          </Link>
        </div>
        <div className="rightComponent">
          <NotificationsNoneIcon className="icon"/>
          {
            user.profilePicture ? <img className="profileIcon icon" src={`data:image/png;base64,${user.profilePicture}`}/> : <div className="profileIcon">
                  <PersonIcon fill="#fff" className="icon" onClick={()=>toggleModal(true)}/>
              </div>
          }
          <div className="settingModal" style={{display:toggle===true?'flex':'none'}}>
            <ul>
              <li>
                <SettingsOutlinedIcon/>
                <p>Settings</p>
              </li>
              <li>
                <ExitToAppOutlinedIcon/>
                <p>Sign Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
