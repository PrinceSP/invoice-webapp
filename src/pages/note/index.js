import React from 'react'
import {TopBar,SideBar,Button} from '../../components'
import "./note.scss"
import SearchIcon from '@mui/icons-material/Search';

const NotePage = (props) => {
  const Search = ()=>{
    <SearchIcon/>
  }
  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="notes"/>
        <div className="others">
          <div className="header">
            <div>
              <p style={{fontSize:'1.5em',fontWeight:400}}>Nota-nota</p>
              <p style={{fontSize:'1em',fontWeight:300}}>Daftar semua nota dan transaksi</p>
            </div>
            <Button name="+Nota Baru"/>
          </div>
          <form>
            <input
              type="text"
              id="header-search"
              placeholder={`${<SearchIcon/>} Search blog posts`}
              name="search"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotePage
