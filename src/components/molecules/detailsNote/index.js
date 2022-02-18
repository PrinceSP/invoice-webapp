import React from 'react'
import {StyledDot} from '../../atoms'
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
            <p>No.HP</p>
            <p>{item.phoneNumber}</p>
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

const style={
  listCont:{
    height:158,width:350,marginBottom:12,marginTop:12,
    marginLeft:25,backgroundColor:'#fff',borderTopLeftRadius:20,
    elevation: 15,shadowColor: "#82B6DB",shadowOpacity: 1,shadowRadius:20
  },
  firstSection:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  secondSection:{paddingRight:15,marginTop:16},
  thirdSection:{paddingRight:15},
  diagnosisText:{color:'#0B2273',fontSize:14.4,fontFamily:'Poppins-Medium'},
  name:{color:'#939394',fontSize:14.4,fontFamily:'Poppins-Medium'},
  date:{color:'#142D84',fontSize:14.4,fontFamily:'Poppins-Medium'},
  total:{color:'#6989F8',fontSize:14.4,fontFamily:'Poppins-Bold'},
  fontRegular:{fontFamily:'Poppins-Regular',color:'#161E3C'},
  textMedium:{fontFamily:'Poppins-Medium',color:'#142D84'},
  itemsMedium:{fontSize:14,color:"#939394",fontFamily:"Poppins-Medium"}
}

const {listCont,diagnosisText,total,firstSection,name,secondSection,thirdSection,date,fontRegular,textMedium,itemsMedium} = style

export default DetailsNote
