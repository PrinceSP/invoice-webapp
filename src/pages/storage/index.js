import React from 'react'
import {TopBar,SideBar,DatasGrid} from '../../components'

const Storage = (props) => {
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="store"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Cek barang yang tersedia</p>
          <DatasGrid/>
        </div>
      </div>
    </div>
  )
}

export default Storage
