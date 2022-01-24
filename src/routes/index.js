import { Routes, Route } from "react-router-dom";
import {Home,UserLists,NotePage,Storage} from '../pages'

const Routing = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UserLists" element={<UserLists />} />
      <Route path="/NotePage" element={<NotePage />} />
      <Route path="/Storage" element={<Storage />} />
    </Routes>
  )
}

export default Routing
