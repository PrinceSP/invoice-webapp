import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./table.scss"

const Table = ({children=null,name,phone,profilePicture,date,id}) => {
  return (
    <table>
      {children}
      <tr>
        <td className='username'>
          <div className="profileIcon">
              {profilePicture?<img alt="profile icon" className="profileIcon" src={`data:image/png;base64,${profilePicture}`}/>:<PersonIcon fill="#fff"/>}
          </div>
          <p>{name}</p>
        </td>
        <td className='blurText'>{date}</td>
        <td className='blurText'>{id}</td>
        <td>{phone}</td>
      </tr>
    </table>
  )
}

export default Table
