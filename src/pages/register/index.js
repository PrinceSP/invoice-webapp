import React,{useRef} from 'react'
import {Button,Footer} from '../../components'
import {Link,useNavigate} from 'react-router-dom'
// import DatePicker from "react-datepicker";
import './register.scss'
// import "react-datepicker/dist/react-datepicker.css";
import {registerCall} from '../../configs/apiCalls'

const Register = (props) => {
  // const [startDate, setStartDate] = useState(new Date());

  const username = useRef()
  const fullname = useRef()
  const email = useRef()
  const profilePicture = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const navigate = useNavigate()
  // const profilePicture = useRef();

  const submitRegister = async (e)=>{
    e.preventDefault()
    if (passwordConfirm.current.value !== password.current.value) {
      console.log(password,passwordConfirm);
      password.current.setCustomValidity("Kata sandi tidak sama!")
    } else {
      const user = {
        fullname: fullname.current.value,
        username: username.current.value,
        email: email.current.value,
        profilePicture: profilePicture.current.value,
        password: password.current.value
      }
      registerCall(user,navigate)
    }
    fullname.current.value=""
    username.current.value=""
    email.current.value=""
    profilePicture.current.value=""
    password.current.value=""
    passwordConfirm.current.value=""
  }
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
        <form onSubmit={submitRegister}>
          <div className="inputs-container">
            <div className="input-item">
              <label>Nama Lengkap</label>
              <input placeholder="dinda gledis mamahit" ref={fullname} required/>
            </div>
            <div className="input-item">
              <label>Nama Pengguna</label>
              <input placeholder="dindagledis1228" ref={username} required/>
            </div>
          </div>
          <div className="inputs-container">
            <div className="input-item">
              <label>Email</label>
              <input placeholder="Masukkan email" ref={email} required/>
            </div>
            <div className="input-item">
              <label>Alamat</label>
              <input placeholder="Masukkan alamat" ref={profilePicture} required/>
            </div>
          </div>
          <div className="inputs-container">
            <div className="input-item">
              <label>Kata Sandi</label>
              <input placeholder="Masukkan username" ref={password} required/>
            </div>
            <div className="input-item">
              <label>Konfirmasi kata Sandi</label>
              <input placeholder="Masukkan fullname" ref={passwordConfirm} required/>
            </div>
          </div>
          <Button type="submit" className="register" name="Daftar"/>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
