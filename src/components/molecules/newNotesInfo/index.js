import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./newnotes.scss"

const NewNotes = (props) => {
  return (
    <div className="newNote-container">
      <h3>Nota Terbaru</h3>
      <table>
        <tr className="table-header">
          <th>Pengguna</th>
          <th>Tanggal & Waktu</th>
          <th>ID Nota</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className='username'>
            <div className="profileIcon">
                <PersonIcon fill="#fff"/>
            </div>
            <p>Dinda Gledis Mamahit</p>
          </td>
          <td className='blurText'>23 mei 2021</td>
          <td className='blurText'>89774654</td>
          <td>Lunas</td>
        </tr>
      </table>
    </div>
  )
}

export default NewNotes
