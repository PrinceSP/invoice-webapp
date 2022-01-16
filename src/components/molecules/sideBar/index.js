import React from 'react'
import './sideBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="side-menu">
          <ul>
            <li className="sidebar-listItem">
              <HomeOutlinedIcon className="sidebarIcon"/>
              <p>Beranda</p>
            </li>
            <li className="sidebar-listItem">
              <PersonOutlineOutlinedIcon className="sidebarIcon"/>
              <p>Pengguna</p>
            </li>
            <li className="sidebar-listItem">
              <AssessmentOutlinedIcon className="sidebarIcon"/>
              <p>Cek Nota</p>
            </li>
            <li className="sidebar-listItem">
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
