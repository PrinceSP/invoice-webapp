import React,{useRef,useContext} from 'react'
import {Button,Footer} from '../../components'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

const ForgotPasswordPage = (props) => {
  const password = useRef()
  const passwordConfirm = useRef()

  const {isFetching, dispatch} = useContext(AuthContext);
  const submit=(e)=>{
    e.preventDefault()
    if (passwordConfirm.current.value !== password.current.value) {
      password.current.setCustomValidity("Kata sandi tidak sama!")
    } else {
      const user = {
        password: password.current.value
      }
    }
  }
  return (
    <div id="login-container">
      <div className="header">
        <p>Invoice Admin</p>
        <div className="needAccount">
          <p>Belum punya akun?</p>
          <Link to="/">
            <Button name="Buat akun"/>
          </Link>
        </div>
      </div>
      <div className="signin-component">
        <h1>Lupa Kata Sandi?</h1>
        <form onSubmit={submit}>
          <label>Password</label>
          <input placeholder="Enter your password" ref={password} type="password" required/>
          <label>Confirm Password</label>
          <input placeholder="Confirm your new password" ref={passwordConfirm} type="password" required/>
          <Button className="login" name={isFetching ? "Loading..." : "Reset Password"} type="submit"/>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default ForgotPasswordPage
