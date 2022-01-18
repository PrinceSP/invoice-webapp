import { Routes, Route } from "react-router-dom";
import {Home, UserLists,NotePage} from '../pages'

const Routing = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UserLists" element={<UserLists />} />
      <Route path="/NotePage" element={<NotePage />} />
    </Routes>
  )
}

export default Routing
