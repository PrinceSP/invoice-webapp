import React,{useState,useContext,useEffect,useRef} from 'react'
import {TopBar,SideBar,Button,Input,Gap,CheckBox} from '../../components'
import "./note.scss"
import {notePostCalls} from '../../configs/apiCalls'
import {AuthContext} from '../../context/AuthContext'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const NotePage = () => {
  const [toggle,setToggle] = useState(false)
  const [invoices,setInvoices] = useState([])
  const {user} = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());

  const vehicleType = useRef()
  const vehicle = useRef()
  const client = useRef()
  const plat = useRef()
  const repairService = useRef()
  const spareParts = useRef()
  const sparePartPrice = useRef()
  const diagnosis = useRef()
  const action = useRef()
  const total = useRef()
  const phoneNumber = useRef()

  const toggleModal = (value)=>{
    if (value===true) {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }

  const submitNote = async(e)=>{
    e.preventDefault()

    const invoiceData = {
      userId:user._id,
      sender:user.username,
      vehicleType:vehicleType.current.value,
      vehicle:vehicle.current.value,
      client:client.current.value,
      date:startDate,
      phoneNumber:phoneNumber.current.value,
      plat:plat.current.value,
      repairService:repairService.current.value,
      spareParts:spareParts.current.value,
      sparePartsPrice:sparePartPrice.current.value,
      diagnosis:diagnosis.current.value,
      action:action.current.value,
      total:total.current.value,
    }
    notePostCalls(invoiceData)
  }

  const invoicePostCalls = async ()=>{
    try {
      const req = await fetch('https://charlie-invoice.herokuapp.com/api/invoice')
      const results = await req.json()
      const newNoteListId = results.map((item,index,arr)=>{
        const clonedItem = Object.assign({}, item)
        let id;
        id=clonedItem._id = index+1
        return {id,...item}
      })
      setInvoices(newNoteListId)
    } catch (e) {
      setInvoices([])
      return e;
    }
  }

  useEffect(()=>{
    invoicePostCalls()
  },[])

  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="notes"/>
        <div className="others">
          <div className="modalBox-container" style={{display:toggle===true?'flex':'none'}}>
            <form onSubmit={submitNote}>
              <h3>Buat nota baru</h3>
              <ul>
                <li>
                  <Input label="Konsumen" holder="prince siachin" name="nama_konsumen" width={307} height={35} refs={client}/>
                  <Input label="No.Telp" holder="081234567xxxxxx" name="no_telp" width={307} height={35} refs={phoneNumber}/>
                  <Input label="Tipe Kendaraan" holder="Honda" name="tipe_kendaraan" width={307} height={35} refs={vehicleType}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Jenis Kendaraan" holder="Mobil" name="jenis_kendaraan" width={460} height={35} refs={vehicle}/>
                  <Input label="No. Polisi" holder="DN 1228 PD" name="no_polisi" width={460} height={35} refs={plat}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Diagnosa" holder="AC Bermasalah" name="diagnosa" width={307} height={35} refs={diagnosis}/>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="datepicker"
                    placeholderText="28/08/2022"
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    />
                  <Input label="Penangan" holder="Pengisian ulang freon" name="penanganan" width={307} height={35} refs={action}/>
                </li>
                <Gap height={20}/>
                <li>
                  <Input label="Suku Cadang" holder="Kompressor" name="suku_cadang" width={307} height={35} refs={spareParts}/>
                  <Input label="Harga Suku Cadang" holder="300,000" name="harga_suku_cadang" width={307} height={35} refs={sparePartPrice}/>
                  <Input label="Jasa Layanan" holder="300,000" name="jasa_layanan" width={307} height={35} refs={repairService}/>
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
                    <h1 style={{color:"#6989F8",margin:0}}>Total Pembayaran</h1>
                    {/**<p className="totalPrice">Rp.145,230,00</p>**/}
                    <Input holder="300,000" name="total" width={307} height={35} refs={total}/>
                    <Gap height={20}/>
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
