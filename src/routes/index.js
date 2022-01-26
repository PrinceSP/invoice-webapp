import {useContext} from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import {Home,UserLists,NotePage,Storage,Login,Register} from '../pages'

const Routing = ()=>{
  const user = false
  return(
    <Routes>
      <Route exact path="/" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" />: <Register/>}/>
      <Route path="/UserLists" element={<UserLists />} />
      <Route path="/NotePage" element={<NotePage />} />
      <Route path="/Storage" element={<Storage />} />
    </Routes>
  )
}

export default Routing
