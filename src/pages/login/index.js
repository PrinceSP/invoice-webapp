import React from 'react'
import {Button,Footer} from '../../components'
import {Link} from 'react-router-dom'
import './login.scss'

const Login = (props) => {
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
        <h1>Sign In</h1>
        <form>
          <label>Username</label>
          <input placeholder="Enter your username"/>
          <div className="password">
            <label>Password</label>
            <Link className="link" to="/login">lupa sandi?</Link>
          </div>
          <input placeholder="Enter your password"/>
          <Link className="submit" to="/">
            <Button className="login" name="Masuk"/>
          </Link>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
