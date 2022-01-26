import {useContext} from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import {Home,UserLists,NotePage,Storage,Login} from '../pages'

const Routing = ()=>{
  const user = false
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/UserLists" element={<UserLists />} />
      <Route path="/NotePage" element={<NotePage />} />
      <Route path="/Storage" element={<Storage />} />
    </Routes>
  )
}

export default Routing
