import React from 'react'

const Button = ({type,name,...rest}) => {
  return (
    <button type={type} {...rest}>
      {name}
    </button>
  )
}

export default Button
