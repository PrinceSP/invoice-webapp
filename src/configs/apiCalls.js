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
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    const req = await fetch('/auth/register',options)
    const results = await req.json()
    if (req.status === 200) {
      setTimeout(()=>{
        navigate('/login')
      },1000)
    }
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const notePostCalls = async (userCredentials)=>{
  try {
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    const req = await fetch('/api/invoice',options)
    const results = await req.json()
  } catch (e) {
    console.log(e);
    return e;
  }
}
