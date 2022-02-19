import React,{useContext} from 'react'
import './sideBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SideBar = ({active}) => {
  const { user } = useContext(AuthContext);
  const history = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="side-menu">
          <ul>
            <Link to="/" className={`sidebar-listItem ${active==="home" && 'active'}`}>
              <HomeOutlinedIcon className="sidebarIcon"/>
              <p>Beranda</p>
            </Link>
            <Link to="/UserLists" className={`sidebar-listItem ${active==="users" && 'active'}`}>
              <PeopleAltOutlinedIcon className="sidebarIcon"/>
              <p>Pengguna</p>
            </Link>
            <Link to={`/profile/${user.username}`} className={`sidebar-listItem ${active==="user" && 'active'}`}>
              <PersonOutlineOutlinedIcon className="sidebarIcon"/>
              <p>Profil</p>
            </Link>
            <Link to="/myNotes" className={`sidebar-listItem ${active==="myNote" && 'active'}`}>
              <ViewListIcon className="sidebarIcon"/>
              <p>Nota Saya</p>
            </Link>
            <Link to="/NotePage" className={`sidebar-listItem ${active==="notes" && 'active'}`}>
              <AssessmentOutlinedIcon className="sidebarIcon"/>
              <p>Semua Nota</p>
            </Link>
            <Link to="/login" onClick={()=>{
                window.localStorage.removeItem("user")
                history.push("/login")
              }} className={`sidebar-listItem ${active==="store" && 'active'}`}>
              <LogoutIcon className="sidebarIcon"/>
              <p>Keluar</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
