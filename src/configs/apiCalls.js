import axios from 'axios'

export const loginCall = async (userCredentials,dispatch)=>{
  dispatch({type:"LOGIN_START"})
  try{
    const res = await axios.post('https://charlie-invoice.herokuapp.com/api/auth/login', userCredentials)
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  }catch (e){
    dispatch({type:"LOGIN_FAILURE",payload:e})
  }
}

export const registerCall = async (userCredentials,navigate)=>{
  try {
    await axios.post('https://charlie-invoice.herokuapp.com/api/auth/register',userCredentials)
    console.log(userCredentials)
    navigate('/login')
  } catch (e) {
    console.log(e);
  }
}
