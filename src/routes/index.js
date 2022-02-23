import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {Home,UserLists,NotePage,Login,Register,MyNotes,ForgotPasswordPage,Profile} from '../pages'
import { AuthContext } from "../context/AuthContext";

const Routing = ()=>{
  const {user} = useContext(AuthContext)
  return(
    <Routes>
      <Route exact path="/" element={user ? <Home /> : <Register/>} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" />: <Register/>}/>
      <Route path="/UserLists" element={<UserLists />} />
      <Route path="/NotePage" element={<NotePage />} />
      <Route path="/Profile/:username" element={<Profile />} />
      <Route path="/myNotes" element={<MyNotes/>}/>
      <Route path="/forgotPassword" element={<ForgotPasswordPage/>}/>
    </Routes>
  )
}

export default Routing
