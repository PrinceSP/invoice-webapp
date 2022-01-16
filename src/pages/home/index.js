import React from 'react'
import {TopBar,SideBar} from '../../components'
import './home.scss'

const Home = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar/>
        <div className="others">
          others
        </div>
      </div>
    </div>
  )
}

export default Home
