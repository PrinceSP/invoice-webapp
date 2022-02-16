import React from 'react'

const Input = ({label,name,holder,width,type,height,...rest}) => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <label>{label}</label>
      <input type={type} style={{height,width,border:"1px solid #9DD6E7"}} name={name} placeholder={holder} {...rest}/>
    </div>
  )
}

export default Input
