import React from 'react'
import {TopBar,SideBar,DatasGrid} from '../../components'

const Storage = (props) => {
  const buttonText = ["Reset","Delete","Details"]
  const classes = buttonText.map(items=>{
    return items.toLowerCase()
  })
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="store"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Cek barang yang tersedia</p>
          <DatasGrid name={buttonText} classes={classes}/>
        </div>
      </div>
    </div>
  )
}

export default Storage
