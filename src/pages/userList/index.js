import React from 'react'
import {TopBar,SideBar,DatasGrid} from '../../components'
import './user.scss'

const UserLists = (props) => {
  const buttonText = ["Reset","Delete","Details"]
  const classes = buttonText.map(items=>{
    return items.toLowerCase()
  })
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Pengaturan Pengguna</p>
          <DatasGrid name={buttonText} classes={classes}/>
        </div>
      </div>
    </div>
  )
}

export default UserLists
