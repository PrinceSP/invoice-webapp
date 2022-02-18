import React from 'react'
import './details.scss'
import CancelIcon from '@mui/icons-material/Cancel';

const DetailsNote = ({item,onClick}) => {
const {fullname,date,total,vehicle,freonUse,vehicleType,diagnosis,action,spareParts,sparePartsPrice,plat,repairService,} = item
  return (
    <div className="backgroundBlur">
      <div className="detailsNote-container">
        <CancelIcon className="exit" onClick={onClick}/>
        <div className="header">
          <h1>Rincian Nota</h1>
          <div className="headerItem">
            <div>
              <p>ID Nota:</p>
              <p>{item._id.split(0,3)}</p>
            </div>
            <div>
              <p>Tanggal Nota:</p>
              <p>{date}</p>
            </div>
          </div>
        </div>
        <div className="firstSection">
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
          <div>
            <p>Kendaraan</p>
            <p>{vehicle}</p>
          </div>
          <div>
            <p>Tipe Kendaraan</p>
            <p>{vehicleType}</p>
          </div>
        </div>
        <div className="secondSection">
          <div>
            <p>Plat Kendaraan</p>
            <p>{plat}</p>
          </div>
          <div>
            <p>Diagnosis</p>
            <p>{diagnosis}</p>
          </div>
          <div>
            <p>Penanganan</p>
            <p>{action}</p>
          </div>
        </div>
        <div className="thirdSection">
          <div>
            <p>Suku Cadang</p>
            <p>{spareParts}</p>
          </div>
          <div>
            <p>Harga Suku Cadang</p>
            <p>{sparePartsPrice}</p>
          </div>
          <div>
            <p>Freon yang digunakan:</p>
            <p>{freonUse}</p>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
            <p>Harga Jasa Layanan</p>
            <p>{repairService}</p>
          </div>
          <div>
            <p>Total Pembayaran</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsNote
