import React from 'react'

const TopBar = (props) => {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div>
          <span className="logo">Invoice Admin</span>
        </div>
        {
          props.profile && <div className="profileIcon"/>
        }
      </div>
    </div>
  )
}

export default TopBar
