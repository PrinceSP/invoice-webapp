import axios from 'axios'

export const loginCall = async (userCredentials,dispatch)=>{
  dispatch({type:"LOGIN_START"})
  try{
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    const res = await fetch('/auth/login', options).then(res=>res.json())
    if (res.message === 'success login') {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.datas });
    } else {
      console.log(res);
    }
  }catch (e){
    return e;
  }
}

export const registerCall = async (userCredentials,navigate)=>{
  try {
    await axios.post('/auth/register',userCredentials)
    console.log(userCredentials)
    navigate('/login')
  } catch (e) {
    console.log(e);
  }
}
