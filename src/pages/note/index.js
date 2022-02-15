import React,{useState,useEffect} from 'react'
import {TopBar,SideBar,Button,Input,Gap,CheckBox} from '../../components'
import "./note.scss"

const NotePage = () => {
  const [toggle,setToggle] = useState(false)
  const [invoices,setInvoices] = useState([])

  const toggleModal = (value)=>{
    if (value===true) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }

  const invoiceCall = async()=> {
    try {
      const req = await fetch('/invoice/')
      const results = await req.json()
      const newUserListId = results.map((item,index,arr)=>{
        const clonedItem = Object.assign({}, item)
        let id;
        id=clonedItem._id = index+1
        delete clonedItem['_id']
        return {id,...item}
      })
      setInvoices(newUserListId)
    } catch (e) {
      console.log(e);
      setInvoices([]);
    }
  }

  useEffect(()=>{
    invoiceCall()
  },[])

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
                  <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Input label="Suku Cadang" holder="300,000" name="jasa_layanan" width={307} height={35}/>
                    <Input label="Harga Suku Cadang" holder="300,000" name="jasa_layanan" width={307} height={35}/>
                  </div>
                  <Input label="Jasa Layanan" holder="Kompressor" name="suku_cadang" width={307} height={35}/>
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
                    <p className="totalPrice">Rp.145,230,00</p>
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
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Tanggal</th>
                <th>Konsumer</th>
                <th>Total</th>
                <th>Opsi</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(item=>(
                <tr key={item._id}>
                  <td id="id">{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.client}</td>
                  <td>{item.diagnosis}</td>
                  <td><Button type="button" name="Lihat Detail"/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default NotePage
