import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./table.scss"
import {localizeDateStr} from '../../../configs'

const Table = ({children=null,name,phone,profilePicture,date,id}) => {

  let actualDate = localizeDateStr(date)

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
        <td className='blurText'>{actualDate}</td>
        <td className='blurText'>{id}</td>
        <td>{phone}</td>
      </tr>
    </table>
  )
}

export default Table
