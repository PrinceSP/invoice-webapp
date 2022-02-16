import React,{useState,useEffect} from 'react'
import Table from '../table'
import TableHeader from '../tableHeader'
import "./newnotes.scss"

const NewNotes = (props) => {
  const [isUserList,setUserLists] = useState([])

  const userListCall = async()=> {
      try {
        const req = await fetch('https://charlie-invoice.herokuapp.com/api/invoice')
        const results = await req.json()
        setUserLists(results)
      } catch (e) {
        setUserLists([]);
      }
    }
  useEffect(()=>{
    userListCall()
  },[])

  return (
    <div className="newNote-container">
      <h3>Nota Terbaru</h3>
      <table>
        <TableHeader/>
      </table>
      {isUserList.map((item,index)=>(
        <Table name={item.sender} date={item.date} id={item._id} phone={item.phoneNumber}/>
      ))}
    </div>
  )
}

export default NewNotes
