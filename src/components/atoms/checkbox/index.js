import React from 'react'

const CheckBox = ({label,name,width,height,...rest}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginRight:15}}>
      <label>{label}</label>
      <input type='radio' style={{height,width,border:"1px solid #9DD6E7"}} name={name} {...rest}/>
    </div>
  )
}

export default CheckBox
