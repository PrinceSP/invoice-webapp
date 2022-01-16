import React from 'react'
import {TopBar,SideBar} from '../../components'
import './user.scss'

const UserLists = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <h1>Selamat Datang, Charlie!</h1>
        </div>
      </div>
    </div>
  )
}

export default UserLists
