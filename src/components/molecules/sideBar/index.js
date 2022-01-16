import React from 'react'
import './sideBar.scss'

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="side-menu">
          <ul>
            <li className="sidebar-listItem">Beranda</li>
            <li className="sidebar-listItem">Pengguna</li>
            <li className="sidebar-listItem">Cek Nota</li>
            <li className="sidebar-listItem">Cek Gudang</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
