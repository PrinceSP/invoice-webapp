import React,{useEffect,useState} from 'react'
import {TopBar,SideBar} from '../../components'
import './profile.scss'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Profile = (props) => {
  const [user,setUser] = useState({})
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`);
      setUser(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <div className="profile-page">
      <TopBar profile={true}/>
      <div className="container">
        <SideBar active="user"/>
        <div className="others">
          <div>
            <h1>{user.fullname}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
