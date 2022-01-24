import React,{useState} from 'react'
import {TopBar,SideBar,Button,Input,Gap,CheckBox} from '../../components'
import "./note.scss"

const NotePage = () => {
  const [toggle,setToggle] = useState(false)

  const toggleModal = (value)=>{
    if (value===true) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }

  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="notes"/>
        <div className="others">
          <div className="modalBox-container" style={{display:toggle===true?'flex':'none'}}>
            <form>
              <h3>Buat nota baru</h3>
              <ul>
                <li>
                  <Input label="No." holder="01" name="no" width={460} height={35}/>
                  <Input label="Konsumen" holder="prince siachin" name="nama_konsumen" width={460} height={35}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Tipe Kendaraan" holder="Honda" name="tipe_kendaraan" width={307} height={35}/>
                  <Input label="Jenis Kendaraan" holder="Mobil" name="jenis_kendaraan" width={307} height={35}/>
                  <Input label="No. Polisi" holder="DN 1228 PD" name="no_polisi" width={307} height={35}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Diagnosa" holder="AC Bermasalah" name="diagnosa" width={460} height={35}/>
                  <Input label="Penangan" holder="Pengisian ulang freon" name="penanganan" width={460} height={35}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Suku Cadang" holder="Kompressor" name="suku_cadang" width={460} height={35}/>
                  <Input label="Jasa Layanan" holder="300,000" name="jasa_layanan" width={460} height={35}/>
                </li>
                <Gap height={20}/>
                <li style={{display:'flex'}}>
                  <div style={{flexDirection:'column'}}>
                    <h3>Jenis Freon:</h3>
                    <div style={{width:190}}>
                      <CheckBox label="Klea" name="checkbox" height={20} width={20}/>
                      <CheckBox label="Bailian" name="checkbox" height={20} width={20}/>
                      <CheckBox label="Dupoet" name="checkbox" height={20} width={20}/>
                    </div>
                  </div>
                  <div>
                    <h1 style={{color:"#6989F8"}}>Total Pembayaran</h1>
                    <p>Rp.145,230,00</p>
                    <Button type="submit" className="submit" name="Simpan Laporan"/>
                  </div>
                </li>
              </ul>
            </form>
            <Button className="exitModal" name="X" onClick={()=>toggleModal(false)}/>
          </div>
          <div className="header">
            <div>
              <p style={{fontSize:'1.5em',fontWeight:400}}>Nota-nota</p>
              <p style={{fontSize:'1em',fontWeight:300}}>Daftar semua nota dan transaksi</p>
            </div>
            <Button name="+Nota Baru" onClick={()=>toggleModal(true)}/>
          </div>
          <form>
            <input
              type="text"
              id="header-search"
              placeholder={`Search blog posts`}
              name="search"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotePage
