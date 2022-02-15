import React, {useContext} from 'react'
import {TopBar,SideBar,Chart,NewNotes} from '../../components'
import './home.scss'
import {AuthContext} from '../../context/AuthContext'

const Home = (props) => {
  const {user} = useContext(AuthContext)

  const name = JSON.stringify(user.fullname)
  const username = typeof name==="string" ? name.split(" ")[0] : name
  console.log(user);
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="home"/>
        <div className="others">
          <h1>Selamat Datang, {typeof username==="string"?username.charAt(1).toUpperCase()+username.replace(/['"]+/g, '').slice(1):name}!</h1>
          <Chart/>
          <NewNotes/>
        </div>
      </div>
    </div>
  )
}

export default Home
