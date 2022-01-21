import React,{useState} from 'react'
import {TopBar,SideBar,Button,Input} from '../../components'
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
                  <Input label="No." holder="01" name="no" width={88}/>
                  <Input label="Konsumen" holder="prince siachin" name="nama_konsumen" width={360}/>
                </li>
                <li>
                  <Input label="Tipe Kendaraan" holder="Honda" name="tipe_kendaraan" width={275}/>
                  <Input label="Jenis Kendaraan" holder="Mobil" name="jenis_kendaraan" width={184}/>
                </li>
                <li>
                  <Input label="No. Polisi" holder="DN 1228 PD" name="no_polisi" width={532}/>
                </li>
                <li>
                  <Input label="Diagnosa" holder="AC Bermasalah" name="diagnosa" width={532}/>
                </li>
                <li>
                  <Input label="Penangan" holder="Pengisian ulang freon" name="penanganan" width={532}/>
                </li>
                <li>
                  <Input label="Suku Cadang" holder="Kompressor" name="suku_cadang" width={532}/>
                </li>
                <li>
                  <Input label="Jenis Freon:" type="checkbox" height={20} width={20}/>
                  <Input type="checkbox" height={20} width={20}/>
                  <Input type="checkbox" height={20} width={20}/>
                </li>
                <li>
                  <Input label="Jasa Layanan" holder="300,000" name="jasa_layanan" width={532}/>
                </li>
              </ul>
            </form>
            <Button name="X" onClick={()=>toggleModal(false)}/>
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
