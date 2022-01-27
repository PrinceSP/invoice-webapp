import React,{useState} from 'react'
import {Button,Footer} from '../../components'
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import './register.scss'
import "react-datepicker/dist/react-datepicker.css";

const Register = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div id="register-container">
      <div className="header">
        <p>Invoice Admin</p>
        <div className="needAccount">
          <p>Sudah punya akun?</p>
          <Link to="/login">
            <Button name="Masuk" style={{backgroundColor:'#000',color:'#fff'}}/>
          </Link>
        </div>
      </div>
      <div className="signup-component">
        <h1>Daftar Akun Baru</h1>
        <form>
          <div className="inputs-container">
            <div className="input-item">
              <label>Nama Lengkap</label>
              <input placeholder="dinda gledis mamahit"/>
            </div>
            <div className="input-item">
              <label>Nama Pengguna</label>
              <input placeholder="dindagledis1228"/>
            </div>
          </div>

          <div className="inputs-container">
            <div className="input-item">
              <label>Tanggal Lahir</label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="input-item">
              <label>Alamat</label>
              <input placeholder="Enter your fullname"/>
            </div>
          </div>
          <div className="inputs-container">
            <div className="input-item">
              <label>Kata Sandi</label>
              <input placeholder="Enter your username"/>
            </div>
            <div className="input-item">
              <label>Konfirmasi kata Sandi</label>
              <input placeholder="Enter your fullname"/>
            </div>
          </div>
          <Link className="submit" to="/login">
            <Button className="register" name="Daftar"/>
          </Link>

        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
