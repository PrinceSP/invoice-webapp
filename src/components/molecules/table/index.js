import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./table.scss"

const Table = ({children=null,name,approval}) => {
  return (
    <table>
      {children}
      <tr>
        <td className='username'>
          <div className="profileIcon">
              <PersonIcon fill="#fff"/>
          </div>
          <p>{name}</p>
        </td>
        <td className='blurText'>23 mei 2021</td>
        <td className='blurText'>89774654</td>
        <td>{approval}</td>
      </tr>
    </table>
  )
}

export default Table
