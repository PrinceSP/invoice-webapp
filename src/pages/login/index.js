import React,{useRef,useContext} from 'react'
import {Button,Footer} from '../../components'
import {Link} from 'react-router-dom'
import './login.scss'
import {AuthContext} from '../../context/AuthContext'
import {loginCall} from '../../configs/apiCalls'

const Login = (props) => {
  const username = useRef()
  const password = useRef()
  const {isFetching, dispatch} = useContext(AuthContext);
  const submit=(e)=>{
    e.preventDefault()
    loginCall({username:username.current.value,password:password.current.value},dispatch)
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
        <h1>Sign In</h1>
        <form onSubmit={submit}>
          <label>Username</label>
          <input placeholder="Enter your username" ref={username}/>
          <div className="password">
            <label>Password</label>
            <Link className="link" to="/login">lupa sandi?</Link>
          </div>
          <input placeholder="Enter your password" ref={password}/>

          <Button className="login" name={isFetching ? "Loading..." : "Masuk"} type="submit"/>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
