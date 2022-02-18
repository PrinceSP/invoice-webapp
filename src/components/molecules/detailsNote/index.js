import React from 'react'
import './details.scss'

const DetailsNote = ({item}) => {
const {fullname,date,key,total,vehicle,freonUse,vehicleType,diagnosis,action,spareParts,sparePartsPrice,plat,Klea,Bailian,Dupoet,repairService,} = item
  return (
    <div className="backgroundBlur">
      <div className="detailsNote-container">
        <div className="header">
          <h1>Rincian Nota</h1>
          <div>
            <div>
              <p>ID Nota</p>
              <p>{item._id.split(0,3)}</p>
            </div>
            <div>
              <p>Tanggal Nota</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>Konsumen</p>
              <p>{fullname}</p>
            </div>
            <div>
              <p>No.HP</p>
              <p>{item.phoneNumber}</p>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <p>Kendaraan</p>
              <p>{vehicle}</p>
            </div>
            <div>
              <p>Tipe Kendaraan</p>
              <p>{vehicleType}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Plat Kendaraan</p>
            <p>{plat}</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <p>Diagnosis</p>
              <p>{diagnosis}</p>
            </div>
            <div>
              <p>Penanganan</p>
              <p>{action}</p>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
            <p>Suku Cadang</p>
            <p>{spareParts}</p>
          </div>
          <div>
            <p>Harga Suku Cadang</p>
            <p>{sparePartsPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsNote
