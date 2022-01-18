import React from 'react'
import './sideBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import {Link} from 'react-router-dom'

const SideBar = ({active}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="side-menu">
          <ul>
            <Link to="/" className={`sidebar-listItem ${active==="home" && 'active'}`}>
              <HomeOutlinedIcon className="sidebarIcon"/>
              <p>Beranda</p>
            </Link>
            <Link to="/UserLists" className={`sidebar-listItem ${active==="user" && 'active'}`}>
              <PersonOutlineOutlinedIcon className="sidebarIcon"/>
              <p>Pengguna</p>
            </Link>
            <Link to="/NotePage" className={`sidebar-listItem ${active==="notes" && 'active'}`}>
              <AssessmentOutlinedIcon className="sidebarIcon"/>
              <p>Cek Nota</p>
            </Link>
            <li className={`sidebar-listItem ${active==="store" && 'active'}`}>
              <ReceiptLongOutlinedIcon className="sidebarIcon"/>
              <p>Cek Gudang</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
