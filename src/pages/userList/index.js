import React, {useEffect,useState} from 'react'
import {TopBar,SideBar,DatasGrid} from '../../components'
import './user.scss'

const UserLists = (props) => {
  const [isUserList,setUserLists] = useState([])
  const buttonText = ["Reset","Delete","Details"]
  const classes = buttonText.map(items=>{
    return items.toLowerCase()
  })

  const userListCall = async()=> {
    try {
      const req = await fetch('https://charlie-invoice.herokuapp.com/api/user/userList/all')
      const results = await req.json()
      const newUserListId = results.map((item,index,arr)=>{
        const clonedItem = Object.assign({}, item)
        let id;
        id=clonedItem._id = index+1
        delete clonedItem['_id']
        return {id,...item}
      })
      setUserLists(newUserListId)
    } catch (e) {
      console.log(e);
      setUserLists([]);
    }
  }

  useEffect(()=>{
    userListCall()
  },[])

  return (
    <div className="main-container">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="users"/>
        <div className="others">
          <p style={{fontSize:'1.5em',fontWeight:400}}>Pengaturan Pengguna</p>
          <DatasGrid name={buttonText} classes={classes} items={isUserList}/>
        </div>
      </div>
    </div>
  )
}

export default UserLists
