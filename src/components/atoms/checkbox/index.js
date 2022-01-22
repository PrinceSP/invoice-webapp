import React from 'react'

const CheckBox = ({label,name,width,height}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
      <label>{label}</label>
      <input type='checkbox' style={{height,width,border:"1px solid #9DD6E7"}} name={name}/>
    </div>
  )
}

export default CheckBox
