import React from 'react'
import {TopBar,SideBar} from '../../components'
import "./note.scss"

const NotePage = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="notes"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Nota-nota</p>
          <p style={{fontSize:'1em',fontWeight:300}}>Daftar semua nota dan transaksi</p>
          <form>
            <input
              type="text"
              id="header-search"
              placeholder="Search blog posts"
              name="search"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotePage
