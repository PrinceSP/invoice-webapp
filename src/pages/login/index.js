import React,{useRef,useContext,useState} from 'react'
import {Button,Footer} from '../../components'
import {Link} from 'react-router-dom'
import './login.scss'
import {AuthContext} from '../../context/AuthContext'
import {loginCall} from '../../configs/apiCalls'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = (props) => {
  const username = useRef()
  const password = useRef()
  const [hide,setHide] = useState(true)

  const {isFetching, dispatch, error} = useContext(AuthContext);
  const submit=(e)=>{
    e.preventDefault()
    const user = {
      username:username.current.value,
      password:password.current.value
    }
    loginCall(user,dispatch)
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
          {isFetching&&<p>{error.message}</p>}
          <label>Username</label>
          <input placeholder="Enter your username" ref={username} required/>
          <div className="password">
            <label>Password</label>
            {hide ? <VisibilityIcon height={20} onClick={()=>setHide(false)} style={{position:'absolute',right:10,top:33,cursor:'pointer'}}/> : <VisibilityOffIcon height={20} onClick={()=>setHide(true)} style={{position:'absolute',right:10,top:33,cursor:'pointer'}}/>}
            <Link className="link" to="/forgotPassword">lupa sandi?</Link>
          </div>
          <input placeholder="Enter your password" ref={password} type={hide===true?"password":"text"} required/>
          <Button className="login" name={isFetching ? "Loading..." : "Masuk"} type="submit"/>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
