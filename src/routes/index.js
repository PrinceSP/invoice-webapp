import { Routes, Route } from "react-router-dom";
import {Home, UserLists} from '../pages'

const Routing = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/UserLists" element={<UserLists />} />
    </Routes>
  )
}

export default Routing
