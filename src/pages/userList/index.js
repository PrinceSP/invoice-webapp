import React from 'react'
import {TopBar,SideBar,Button,DatasGrid} from '../../components'
import './user.scss'

const UserLists = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Pengaturan Pengguna</p>
          <DatasGrid/>
        </div>
      </div>
    </div>
  )
}

export default UserLists
