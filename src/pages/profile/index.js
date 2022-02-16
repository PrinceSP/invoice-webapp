import React,{useContext} from 'react'
import {TopBar,SideBar} from '../../components'
import './profile.scss'
import {AuthContext} from '../../context/AuthContext'

const Profile = (props) => {
  const {user} = useContext(AuthContext)

  return (
    <div className="profile-page">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <div>
            <h1>{user.fullname}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
