import React from 'react'
import {TopBar,SideBar} from '../../components'
import './home.scss'

const Home = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="home"/>
        <div className="others">
          <h1>Selamat Datang, Charlie!</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
