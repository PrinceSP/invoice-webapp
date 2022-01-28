import axios from 'axios'
export const loginCall = async (userCredentials,dispatch)=>{
  dispatch({type:"LOGIN_START"})
  try{
    const res = await axios.post('/auth/login', userCredentials)
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
  }catch (e){
    dispatch({type:"LOGIN_FAILURE",payload:e})
  }
}

export const registerCall = async (userCredentials)=>{
  try {
    await axios.post('/auth/register',userCredentials)
    console.log(userCredentials)
  } catch (e) {
    console.log(e);
  }
}
